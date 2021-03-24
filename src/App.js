import React from 'react';
import {LandingPage} from './pages/LandingPage';
import FxRate from './pages/fx-rate';
import { BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
     
     <BrowserRouter>
      
        <Route exact path="/" component={LandingPage}/>
        <Route path="/fx-rate" component={FxRate}/>
      
    </BrowserRouter>
  );
}

export default App;
