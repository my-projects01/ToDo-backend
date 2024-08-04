const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    const task = new Task({ title, description, user: req.user.id, dueDate });
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Get all tasks for the authenticated user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.send(tasks);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  const { title, description, dueDate ,status} = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, description, dueDate ,status},
      { new: true }
    );
    if (!task) return res.status(404).send({ message: 'Task not found' });
    res.send(task);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).send({ message: 'Task not found' });
    res.send({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
