import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => 
  (
    <div className = "blue-background padding blue-textANDtop-padding">
      {(props.todos.length !=0) ? (
        props.todos.map((todo, index) => 
        <TodoItem 
          todo={todo} 
          index={index} 
          key={index}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
          handleChange={props.handleChange}
        />
        )
      ):(
        <div>
          <div display="inline-block" >
            <label display="block">{props.greetingOne}</label>
            <hr className="table-light" />
          <label display="block">{props.greetingTwo}</label>
          </div>
        </div>
      )
      }
       
    </div>
  )

export default TodoList;
