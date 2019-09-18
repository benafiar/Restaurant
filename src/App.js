import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Layout  from "./containers/Layout/Layout";
import { AppContextProvider } from "./context/AppContext";
import Home from './pages/Home/Home'

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;