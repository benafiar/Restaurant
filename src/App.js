import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Layout  from "./containers/Layout/Layout";
import { AppContextProvider } from "./context/AppContext";
import Home from './pages/Home/Home'
import Beef from './pages/Beef/Beef'

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/flame_grilled_beef" component={Beef} />
        </Layout>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;