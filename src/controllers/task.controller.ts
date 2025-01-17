import { Request, Response } from 'express';
import Task, { ITask } from '../models/task.model';
import { AuthRequest } from '../middleware/auth';

// Create a new task
const createTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { title, description } = req.body;

  try {
    const task = new Task({
      userId: req.user,
      title,
      description,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all tasks for the logged-in user
const getTasks = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find({ userId: req.user });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a task
const updateTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const task = await Task.findOne({ _id: id, userId: req.user });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a task
const deleteTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, userId: req.user });
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export { createTask, getTasks, updateTask, deleteTask };
