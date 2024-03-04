import React from 'react';
import EachItem from './EachItem';

const Items = ({ items, onCheck, onDelete, onEdit, onAddSubChore, onCheckSubChore, onDeleteSubChore, onEditSubChore }) => {
  return (
    <div>
      {items.map((item) => (
        <EachItem
          key={item.id}
          item={item}
          onCheck={onCheck}
          onDelete={onDelete}
          onEdit={onEdit}
          onAddSubChore={onAddSubChore}
          onCheckSubChore={onCheckSubChore}
          onDeleteSubChore={onDeleteSubChore}
          onEditSubChore={onEditSubChore}
        />
      ))}
    </div>
  );
};

export default Items;