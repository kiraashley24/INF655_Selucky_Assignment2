import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
        alert('Please enter both a title and description for the item');
        return;
    }
    const id = uuidv4();
    onAddItem({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Chore:</label>
        <input
          id="title"
          type="text"
          placeholder="Enter chore title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Details:</label>
        <input
          id="description"
          type="text"
          placeholder="Enter chore details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Chore <IoIosAddCircle /></button>
    </form>
  );
};

export default AddItem;
