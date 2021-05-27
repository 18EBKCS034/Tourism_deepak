import React from "react";
import Header from './Header';
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          </Switch>
        
      </div>
    </>
  );
}
