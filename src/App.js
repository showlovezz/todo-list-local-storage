import React from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';

const App = () => {
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
        <List del={delHandler} done={doneHandler} />
      </Card>
    </Layout>
  );
}

export default App;
