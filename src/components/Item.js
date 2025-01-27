function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li style={{ fontSize: '1.5rem' }}>
      <input type="checkbox" value={item.id} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.done ? 'line-through' : '' }}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)} style={{ border: 'none', background: 'none' }}>
        ❌
      </button>
    </li>
  );
}


export default Item;