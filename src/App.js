import { useEffect, useState } from 'react';
import './App.css';

const listItems = [
  {
    id: 1,
    title: 'Eat',
    done: false
  },
  {
    id: 2,
    title: 'Sporting',
    done: true
  }
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form listItems={listItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-header">
      <span className="logo">📄 GoCheck ✅</span>
    </div>
  );
}

function Form({ listItems }) {
  const [title, setTitle] = useState('');
  const [updateListItems, setUpdateListItems] = useState(listItems);
  const [counter, setCounter] = useState(3);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: new Date().getTime(),
      title: title,
      done: false
    };

    setUpdateListItems(prevItems => [...prevItems, data]);
    setCounter(counter + 1);
    setTitle('');
  }

  return (
    <>
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau di catat?</h3>

      <div>
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <button>Add</button>
      </div>
    </form>
      <CheckList listItems={updateListItems} setUpdateListItems={setUpdateListItems} />
    </>
  );
}

function CheckList({ listItems,setUpdateListItems }) {
  return (
    <div className="list">
      <ul>
        {listItems.map(item => <Item key={item.id} item={item} setUpdateListItems={setUpdateListItems} />)}
      </ul>
    </div>
  );
}

function Item({ item, setUpdateListItems }) {
  
  function handleDelete(e){
    e.preventDefault();
    setUpdateListItems(prevItems => prevItems.filter(i => i.id !== item.id));
  }

  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? 'line-through' : '' }}>
        {item.title}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>📄 Kamu punya x catatan dan baru x yang dichecklist (x%) ✅</span>
    </footer>
  );
}

export default App;
