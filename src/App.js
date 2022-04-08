import React, { useState } from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

const App = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const delHandler = (todoId) => {
    if (window.confirm('Are you sure ?')) {
      setTodoList((todoList) => todoList.filter((todo) => todo.id !== todoId))
    }
  }
  const doneHandler = (todoId) => {
    const index = todoList.findIndex((item) => item.id === todoId)
    const duplicateTodoList = [...todoList]

    duplicateTodoList[index] = {
      id: todoList[index].id,
      title:  todoList[index].title,
      done: !todoList[index].done,
    }

    setTodoList(duplicateTodoList)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList([{id: Date.now(), title: todo, done: false}, ...todoList])
  }

  return (
    <Layout>
      <Card>
        <Header />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} submit={submitHandler} />
        <List del={delHandler} done={doneHandler} todoList={todoList} />
      </Card>
    </Layout>
  );
}

export default App;
