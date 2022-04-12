import React, { useEffect, useState } from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

const useTodoList = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const getTodoList = JSON.parse(localStorage.getItem('todoList'))

    if (getTodoList.length !== 0) {
      setTodoList(getTodoList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList];
}

// how react handle shared logic best practice
// mixin, HOC, render props, hooks

const App = () => {
  const [todo, setTodo] = useState('')
  const [error, setError] = useState('')
  const [todoList, setTodoList] = useTodoList()

  const handleDelete = (todoId) => {
    if (window.confirm('Are you sure ?')) {
      setTodoList((todoList) => todoList.filter((todo) => todo.id !== todoId))
    }
  }
  const handleDone = (todoId) => {
    // const index = todoList.findIndex((item) => item.id === todoId)
    // const duplicateTodoList = [...todoList]

    // duplicateTodoList[index] = {
    //   id: todoList[index].id,
    //   title:  todoList[index].title,
    //   done: !todoList[index].done,
    // }

    // setTodoList(duplicateTodoList)
    setTodoList((list) => list.map(todo => todo.id !== todoId ? todo : {...todo, done: !todo.done}))
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
        <List del={handleDelete} done={handleDone} todoList={todoList} />
      </Card>
    </Layout>
  );
}

export default App;
