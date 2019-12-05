import React from 'react';
import logo from './logo.svg';
import './topbar.css';
import { useState } from "react";  
import { Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import InfoButton from './symbols/questionmark.png';
import InfoBox from './infobox.js';

const HomeTopBar = props =>
{
  const [infoBoxIsOpen, setInfoBox] = useState(false);

  const toggleInfoBox = event =>
  {
    if(infoBoxIsOpen)
    {
      setInfoBox(false);
    }
    else if(!infoBoxIsOpen)
    {
      setInfoBox(true);
    }
  };


  return(
    <div>

      <div className="top-bar">
        
        <div id="campuskartan_logo" style={{ marginRight:20 }}>
          
        </div>


        <div style={{marginTop: "30px"}} onClick={toggleInfoBox}>
          <img src={InfoButton} style={{height:40}} />
        </div>



      </div>

      { 
        infoBoxIsOpen 
        && 
        InfoBox() 
      }

    </div>
  );
}


export default HomeTopBar;


/*

*/