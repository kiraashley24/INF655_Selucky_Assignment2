import React, { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit } from "react-icons/fi";

const EachItem = ({ item, onCheck, onDelete, onEdit, onAddSubChore, onDeleteSubChore, onEditSubChore, onCheckSubChore }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(item.title);
    const [editedDescription, setEditedDescription] = useState(item.description);
    const [newSubChore, setNewSubChore] = useState('');
  
    const handleSave = () => {
      onEdit(item.id, editedTitle, editedDescription);
      setIsEditing(false);
    };
  
    const handleAddSubChoreClick = () => {
      if (newSubChore.trim() !== '') {
        onAddSubChore(item.id, newSubChore);
        setNewSubChore('');
      }
    };
  
    return (
      <div className="item-card">
        {!isEditing ? (
          <>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onCheck(item.id)}
            />
            <div className="item-content">
              <h3 className={item.checked ? 'item-title checked' : 'item-title'}>{item.title}</h3>
              <p className={item.checked ? 'item-description checked' : 'item-description'}>{item.description}</p>
              {/* Sub-chores */}
              <div>
                {item.subChores && item.subChores.map((subChore, index) => (
                  <div key={index} className={subChore.checked ? 'sub-chore checked' : 'sub-chore'}>
                    <input
                      type="checkbox"
                      checked={subChore.checked}
                      onChange={() => onCheckSubChore(item.id, index)}
                    />
                    <span>{subChore.title}</span>
                    <button className="edit-button" onClick={() => onEditSubChore(item.id, index)}><FiEdit /></button>
                    <button className="delete-button" onClick={() => onDeleteSubChore(item.id, index)}><RiDeleteBin2Line /></button>
                  </div>
                ))}
                <div className="add-sub-chore">
                  <input
                    type="text"
                    placeholder="Add Sub-Chore"
                    value={newSubChore}
                    onChange={(e) => setNewSubChore(e.target.value)}
                  />
                  <button onClick={handleAddSubChoreClick}>Add</button>
                </div>
              </div>
            </div>
            <button className="edit-button" onClick={() => setIsEditing(true)}><FiEdit /></button>
            <button className="delete-button" onClick={() => onDelete(item.id)}><RiDeleteBin2Line /></button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        )}
      </div>
    );
  };
  
  export default EachItem;
