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
      <Form />
      <CheckList />
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

function Form() {
  return (
    <div className="add-form">
      <h3>Ada yang mau di catat?</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? 'line-through' : '' }}>
        {item.title}
      </span>
      <button>❌</button>
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
