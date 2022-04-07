import React, { useState } from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

const App = () => {
  const [todo, setTodo] = useState('')

  const delHandler = () => {
    console.log('del')
  }
  const doneHandler = () => {
    console.log('done')
  }

  return (
    <Layout>
      <Card>
        <Header />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} />
        <List del={delHandler} done={doneHandler} />
      </Card>
    </Layout>
  );
}

export default App;
