const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Task = require("../models/Task");

router.post("/", auth, async (req, res) => {
  if (req.user.role !== "Admin")
    return res.status(403).json({ msg: "Access denied" });

  const task = await Task.create(req.body);
  res.json(task);
});

router.get("/:projectId", auth, async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId })
    .populate("assignedTo", "name");

  res.json(tasks);
});

router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task.assignedTo.toString() !== req.user._id.toString())
    return res.status(403).json({ msg: "Not allowed" });

  task.status = req.body.status;
  await task.save();

  res.json(task);
});

module.exports = router;