import React, { forwardRef } from 'react';
import Arrow from './Arrow';
import Close from './Close';
import useList from './composables/useList';

export default forwardRef(function list(props, ref) {
  const [items, item, addItem, input, sortUp, sortDown, sortList, remove] =
    useList([
      { id: 0, name: 'Atm 1 - Ticket 001' },
      { id: 1, name: 'CDM 2 - Ticket 005' },
      { id: 2, name: 'Atm 2 - Ticket 002' },
      { id: 3, name: 'Atm 3 - Ticket 004' },
      { id: 4, name: 'CDM 2 - Ticket 003' },
    ]);
  return (
    <div className="stage" data-has-animation={ref ? true : null}>
      <div className="logo">
        {(ref && <h1>Signage Board</h1>) || 'Default react'}
      </div>
      <ul ref={ref}>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div className="action-icons">
              <button onClick={() => sortUp(item)}>
                <Arrow direction="up" />
              </button>
              <button onClick={() => sortDown(item)}>
                <Arrow direction="down" />
              </button>
              <button className="remove" onClick={() => remove(item)}>
                <Close />
              </button>
            </div>
          </li>
        ))}
        {/* <li>
          <form onSubmit={addItem}>
            <input
              placeholder="Add another..."
              type="text"
              value={item}
              onChange={input}
            />
            <button type="submit">Add</button>
            <button type="button" onClick={() => sortList()}>
              Sort
            </button>
          </form>
        </li> */}
      </ul>
    </div>
  );
});
