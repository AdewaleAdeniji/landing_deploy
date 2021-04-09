import React from 'react';
import {LandingPage} from './pages/LandingPage';
import FxRate from './pages/fx-rate';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import EasterPromo from './pages/easterpromo';

function App() {
  return (
     
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/fxrates" component={FxRate}/>
        <Route path="/easter2k" component={EasterPromo} />
        <Route component={EasterPromo} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
