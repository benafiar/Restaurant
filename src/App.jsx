import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import { AppContextProvider } from './context/AppContext';
import { Home, Content } from './pages';

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Content} />
        </Switch>
      </Layout>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;
