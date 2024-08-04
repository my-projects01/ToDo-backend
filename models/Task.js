const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Done','Over Due'], default: 'Pending' },
  dueDate: { type: Date }
});

module.exports = mongoose.model('Task', TaskSchema);