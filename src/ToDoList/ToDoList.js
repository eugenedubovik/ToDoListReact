import React, { useState } from 'react';
import {
  NavMenu, Form, ToDoItem, Button,
} from './components';


export function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  // const [todoData, setTodoData] = useState([data]);

  const onSubmit = (event) => {
    event.preventDefault();
    setData(data.concat([inputValue]));
    setInputValue('');
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const deleteToDoItem = (id) => {
    console.log();
    // setTodoData(todoData.splice(item, 1));
    setData(data.filter((item, index) => index !== id));
  };

  return (
    <div>
      <NavMenu />
      <Form inputValue={inputValue} onChange={onChange} onSubmit={onSubmit} />
      {
            data.map((item, index) => {
              return (
                <ToDoItem key={item} id={index} onClickDel={deleteToDoItem}>
                  <p>{item}</p>
                  <div>
                    {/* <Button color="green">Done</Button>
                    <Button color="red" onClick={deleteToDoItem}>Delete</Button> */}
                  </div>
                </ToDoItem>
              );
            })

          }

    </div>
  );
}
