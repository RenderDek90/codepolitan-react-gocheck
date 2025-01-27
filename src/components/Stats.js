function Stats({ items }) {
  if (items.length === 0) {
    return <p>Belum ada item</p>;
  }
  const totalItems = items.length;
  const doneItems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);
  return (
    <footer>
      <div>
        <span>
          {' '}
          Kamu punya {totalItems} catatan dan baru {doneItems} yang dichecklist ({percentage}%)
        </span>
      </div>
    </footer>
  );
}

export default Stats;