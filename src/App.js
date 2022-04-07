import React from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  return (
    <Layout>
      <Card>
        <Header />
        <h1>Hello!</h1>
        list here !
      </Card>
    </Layout>
  );
}

export default App;
