import React from 'react';
 // If you plan to split styles

const ListItem = ({ item, onMoveLeft, onMoveRight, showArrows }) => (
  <div className="list-item">
    <div className="item-text">
      <h4 className="item-title">{item.name || "NO TITLE FOUND"}</h4>
      <p className="item-description">{item.description}</p>
    </div>
    {showArrows && (
      <div className="arrows">
        {onMoveLeft && <button onClick={() => onMoveLeft(item)}>←</button>}
        {onMoveRight && <button onClick={() => onMoveRight(item)}>→</button>}
      </div>
    )}
  </div>
);

export default ListItem;
