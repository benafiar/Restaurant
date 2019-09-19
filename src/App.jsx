import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Layout  from "./containers/Layout/Layout";
import { AppContextProvider } from "./context/AppContext";
import {Home, ComboMeals, SpecialOffers, Beef, ChickenFish, Sides, Drinks, Sweets, SaladsAndMore, KingJr} from './pages'

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/combo_meals" component={ComboMeals} />
          <Route exact path="/special_offers" component={SpecialOffers} />
          <Route exact path="/flame_grilled_beef" component={Beef} />
          <Route exact path="/chicken_n_fish" component={ChickenFish} />
          <Route exact path="/sides" component={Sides} />
          <Route exact path="/drinks_n_coffee" component={Drinks} />
          <Route exact path="/sweets" component={Sweets} />
          <Route exact path="/salads_n_more" component={SaladsAndMore} />
          <Route exact path="/king_jr" component={KingJr} />
        </Layout>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;