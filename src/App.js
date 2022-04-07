import React from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <Layout>
      <Card>
        <Header />
        <List />
      </Card>
    </Layout>
  );
}

export default App;
