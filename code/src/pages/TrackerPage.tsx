// src/pages/TrackerPage.tsx
import React, { useState } from 'react';
import { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

const TrackerPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      startTime: new Date(),
      endTime: null,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const handleStopTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, endTime: new Date() } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleReset = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Task Tracker</h2>

      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button onClick={handleAddTask}>Start Task</button>
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset All</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> — {task.description}
            <br />
            Started at: {task.startTime?.toLocaleTimeString()}
            <br />
            {task.endTime ? (
              <>
                Ended at: {task.endTime.toLocaleTimeString()}
              </>
            ) : (
              <button onClick={() => handleStopTask(task.id)}>Stop</button>
            )}
            <br />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackerPage;
