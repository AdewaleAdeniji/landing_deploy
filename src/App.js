import React from 'react';
import {LandingPage} from './pages/LandingPage';
import FxRate from './pages/fx-rate';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import EasterPromo from './pages/easterpromo';
import Stores from './pages/stores';
import Landing from './pages/index';
import Ramadan from './pages/ramadan-landing';

function App() {
  return (
     
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/fxrates" component={FxRate}/>
        <Route path="/easter2k" component={EasterPromo} />
        <Route path="/store" component={Stores} />
        <Route path="/newlanding" component={Landing}/>
        <Route component={Ramadan} path="/ramadan"/>
        <Route component={EasterPromo} />
        
        
        </Switch>
    </BrowserRouter>
  );
}

export default App;
