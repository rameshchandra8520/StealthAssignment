import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.controller';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.post('/', authMiddleware, createTask); 
router.get('/', authMiddleware, getTasks); 
router.put('/:id', authMiddleware, updateTask); 
router.delete('/:id', authMiddleware, deleteTask); 

export default router;
