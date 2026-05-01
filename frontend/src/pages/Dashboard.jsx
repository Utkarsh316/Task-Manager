import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const headers = { Authorization: token };

  useEffect(() => {
    if (!token) navigate("/");
    else loadProjects();
  }, []);

  // ---------------- PROJECT ----------------

  const loadProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects", {
        headers,
      });
      setProjects(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const createProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/projects",
        { name, description },
        { headers }
      );
      setName("");
      setDescription("");
      loadProjects();
    } catch (err) {
      alert("Only Admin can create project");
    }
  };

  // ---------------- TASK ----------------

  const createTask = async () => {
    if (!selectedProject) {
      alert("Enter Project ID");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title: taskTitle,
          project: selectedProject,
        },
        { headers }
      );

      setTaskTitle("");
      alert("Task created");
      loadTasks(selectedProject);
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Error creating task");
    }
  };

  const loadTasks = async (projectId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/tasks/${projectId}`,
        { headers }
      );
      setTasks(res.data);
      setSelectedProject(projectId);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const markDone = async (taskId, projectId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        { status: "Done" },
        { headers }
      );
      loadTasks(projectId);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  // ---------------- UI ----------------

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      {/* CREATE PROJECT */}
      <form onSubmit={createProject}>
        <input
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Create</button>
      </form>

      {/* PROJECT LIST */}
      <h3>Projects</h3>
      {projects.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid",
            margin: 10,
            padding: 10,
            cursor: "pointer",
          }}
          onClick={() => loadTasks(p._id)}
        >
          <h4>{p.name}</h4>
          <p>{p.description}</p>
          <small>Project ID: {p._id}</small>
        </div>
      ))}

      {/* TASK SECTION */}
      <h3>Create Task</h3>
      <input
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={createTask}>Create Task</button>

      {/* TASK LIST */}
      <h3>Tasks</h3>
      {tasks.map((t) => (
        <div key={t._id} style={{ margin: 10 }}>
          {t.title} - {t.status}
          <button
            onClick={() => markDone(t._id, t.project)}
            style={{ marginLeft: 10 }}
          >
            Mark Done
          </button>
        </div>
      ))}
    </div>
  );
}