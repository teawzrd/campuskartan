import React from 'react';
import './App.css';

// Tell Webpack which image files to use.
import logo from './temp_kartor/TP41.png';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';


function App() {
  return (
    <div>
      <div id="up_down">
        <img src={up_button} className = "button"/>
        <img src={down_button} className = "button"/>
      </div>

      <div className = "background">
        <img src={logo} className = "background_image"/>
      </div>

    </div>
  );
}

export default App;
