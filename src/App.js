import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  let [list,setList] = useState(['asdasd','wef'])
  let [addTodo,setAddTodo] = useState("")
  const add = (value) => {
    setList([...list,value])
    setAddTodo("")
  }
  const deleteTodo = (todo) => {
    setList(list.filter((el) => el !== todo))
  }
  return (
    <div className="App">
      {list.length === 0
      ? <div className='null'> Заметок не найдено </div>
      : <Todo deleteTodo={deleteTodo} list = {list}/>
      }
      <AddTodo add={add} value ={addTodo} setValue={setAddTodo}/>
    </div>
  );
}

export default App;
