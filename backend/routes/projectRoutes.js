const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Project = require("../models/Project");

router.post("/", auth, async (req, res) => {
  if (req.user.role !== "Admin")
    return res.status(403).json({ msg: "Access denied" });

  const project = await Project.create({
    ...req.body,
    createdBy: req.user._id,
    members: [req.user._id]
  });

  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({
    members: req.user._id
  }).populate("members", "name email");

  res.json(projects);
});

module.exports = router;