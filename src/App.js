
import './App.css';

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

function Logo(){
  return (
  <div className="logo-header">
    <span className="logo">📄 GoCheck ✅</span>
    </div>
    );
}

function Form(){
  return(
    <div className="add-form">
      <h3>Ada yang mau di catat?</h3>
    </div>
  )
}

function CheckList(){
  return(
    <div className="list">
      <ul>
        <li>Makan</li>
        <li>Tidur</li>
      </ul>
    </div>
  )
}

function Stats(){
  return (
    <footer className="stats">
      <span>📄 Kamu punya x catatan dan baru x yang dichecklist (x%) ✅</span>
    </footer>
  );
}

export default App;
