//import logo from './platzi.webp';

import React from 'react';

import { TodoCounter } from './TodoCounter';
import {CreateTodobutton} from './CreateTodobutton'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {TodoSearch}  from './TodoSearch'

const defaultTodos = [
  {
    text:'Cortar cebolla', completed: false
  },
  {
    text:'Cortar cebolla', completed: true
  },
  {
    text:'terminar curso', completed: false
  },
  {
    text:'ejemplo', completed: true
  },
  {
    text:'ejemplo2', completed: true
  },
];

function App() {
  return (
    <>
      <TodoCounter completed = {16} total = {25}/>
      
      <TodoSearch/>

      <TodoList>  
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} 
          text={todo.text}
          completed= {todo.completed}
          />
        ))}
        {[<TodoCounter/>, <TodoList/>]}
      </TodoList>
        
      <CreateTodobutton/>
    </>
  );
}

export default App;
