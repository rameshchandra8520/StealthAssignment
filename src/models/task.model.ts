import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  userId: string; // Reference to the user
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
}

const TaskSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
