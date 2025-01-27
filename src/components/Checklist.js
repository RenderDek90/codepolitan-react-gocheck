import { useState } from "react";
import Item from "./Item";

function CheckList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');

  function sortItems() {
    switch (sortBy) {
      case 'title':
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case 'status':
        return items.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case 'input':
      default:
        return items;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', justifyContent: 'center', alignItems: 'center' }}>
        {sortedItems.map((item) => {
          return <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />;
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Berdasarkan Input</option>
          <option value="title">Berdasarkan Judul</option>
          <option value="status">Berdasarkan Status</option>
        </select>
        <button className="clear" onClick={onClearItems}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default CheckList;