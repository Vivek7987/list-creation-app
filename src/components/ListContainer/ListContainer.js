import React from 'react';
import ListItem from '../ListItem/ListItem';


const ListContainer = ({
  title,
  items,
  listId,
  onCheck,
  checked,
  onMoveLeft,
  onMoveRight,
  showArrows,
}) => (
  <div className="list-container">
    {onCheck ? (
      <div className="list-header">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(listId)}
        />
        <h3>{title}</h3>
      </div>
    ) : (
      <h3 className="list-header">{title}</h3>
    )}
    <div className="items-container">
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onMoveLeft={onMoveLeft}
          onMoveRight={onMoveRight}
          showArrows={showArrows}
        />
      ))}
    </div>
  </div>
);

export default ListContainer;
