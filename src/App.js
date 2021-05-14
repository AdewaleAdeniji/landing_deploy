import React from 'react';
import {LandingPage} from './pages/LandingPage';
import FxRate from './pages/fx-rate';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import EasterPromo from './pages/easterpromo';
import Stores from './pages/stores';
import Landing from './pages/index';
import Ramadan from './pages/ramadan-landing';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import NoSafe from './pages/nosafe';

function App() {
  return (
     
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/fxrates" component={FxRate}/>
        <Route path="/easter2k" component={EasterPromo} />
        <Route path="/store" component={Stores} />
        <Route path="/newlanding" component={Landing}/>
        <Route path="/terms" component={Terms}/>
        <Route path="/privacy" component={Privacy}/>
        <Route component={Ramadan} path="/donations"/>
        <Route component={NoSafe} path="/nosafe"/>
        <Route component={Landing} />

        
        
        </Switch>
    </BrowserRouter>
  );
}

export default App;
