import React, { useEffect, useState } from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

const App = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getTodoList = JSON.parse(localStorage.getItem('todoList'))

    if (getTodoList.length !== 0) {
      setTodoList(getTodoList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

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

    if (todo.length < 5) {
      setError('At least 5 word required!')
      return false
    }

    setTodoList([{id: Date.now(), title: todo, done: false}, ...todoList])
    setError('')
    setTodo('')
  }

  return (
    <Layout>
      <Card>
        <Header />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} submit={submitHandler} error={error} />
        <List del={delHandler} done={doneHandler} todoList={todoList} />
      </Card>
    </Layout>
  );
}

export default App;
