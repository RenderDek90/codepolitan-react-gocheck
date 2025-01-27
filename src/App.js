
import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import CheckList from './components/Checklist';
import Stats from './components/Stats';

function App() {
  const [listItems , setListItems] = useState([]);

  function handleSubmitItem(item){    
    setListItems((listItems) => [...listItems , item]);
  }

  function handleDeleteItem(id){
    setListItems((listItems) => listItems.filter((item) => id !== item.id));
  }

  function handleClearItems(){
    const confirm = window.confirm("Clear the list?");
    if(confirm){
      setListItems([]);
    }
  }

  function handleToggleItem(id){
    setListItems((listItems) => {
      return listItems.map((item) => {
      if(item.id === id){
        return {
          ...item,
          done:!item.done,
        }
      }

      return item;
    })
  });
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleSubmitItem} />
      <CheckList items={listItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems = {handleClearItems}/>
      <Stats items={listItems} />
    </div>
  );
}

export default App;
