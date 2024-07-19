
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
  return <span className="logo">📄 GoCheck ✅</span>;
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

}

export default App;
