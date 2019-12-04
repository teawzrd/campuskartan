import React from 'react';
import logo from './logo.svg';
import './topbar.css';
import { useState } from "react";  
import { Router, Route, Switch, Link } from "react-router-dom";
import upButton from './symbols/up_white.svg';
import downButton from './symbols/down_white.svg';
import homeButton from './symbols/home.svg'; 
import InfoButton from './symbols/questionmark.png';
import Kakenhus from './kakenhus.js';
import Tappan from './tappan.js';
import InfoBox from './infobox.js';


const TopBar = props =>
{
  console.log("----floorz = " + props.floorFromURL);


  let defaultFloor = parseInt(props.floorFromURL);
  let topFloor; 
  let bottomFloor;


  if(props.building === "Täppan")
  {
    //defaultFloor = 3;
    topFloor = 5;
    bottomFloor = 3
  }

  if(props.building === "Kåkenhus")
  {
    //defaultFloor = 2;
    topFloor = 5;
    bottomFloor = 1;
  }


  const [floor, setFloor] = useState(defaultFloor);


  //ändrar statet floor
  const up = event => 
  {
    if(floor >= topFloor)
    {
      setFloor(topFloor);
      return;
    }

    setFloor(floor + 1);
  }

  //ändrar statet floor
  const down = event => 
  {
    if(floor <= bottomFloor)
    {
      setFloor(bottomFloor);
      return;
    }

    setFloor(floor - 1); 
  }
{/*
  */}
  //returnerar värdet på det floor man klickar sig till
  const toFloor = arg =>
  {
    if(arg === "down")
    {
      if(floor <= bottomFloor)
      {
        return bottomFloor;
      }

      return floor - 1;
    }

    else if(arg === "up")
    {
      if(floor >= topFloor)
      {
        return topFloor;
      }

      return floor + 1;
    }
  }






  //==================================================//
  //==============   InfoBox code   ==================//
  //==================================================//
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
  //==================================================//




  return(
    <div>

      <div className="top-bar">
        
        <Link to={"/"} >
          <img src={homeButton} style={{ height:80 }} className="menu-button"/>
        </Link>

        <div style={{ marginRight:20 }}>
          <p>{props.building}</p> 
        </div>

        <Link to={"/" + props.building + "/" + toFloor("down") } >
          <div onClick={down}>
            <img src={downButton} style={{ height:30 }} className="arrow"/>
          </div>
        </Link>

        <div>
          <p>{floor}</p>
        </div>

        <Link to={"/" + props.building + "/" + toFloor("up") } >
          <div onClick={up}>
            <img src={upButton} style={{ height:30 }} className="arrow"/>
          </div>
        </Link>

        <div style={{marginTop: "30px", marginLeft: "30px"}} onClick={toggleInfoBox}>
          <img src={InfoButton} style={{height:40}} />
        </div>

      </div>


      {/*
        */}
      { 
        infoBoxIsOpen 
        && 
        InfoBox() 
      }
      

    </div>
  );
}


export default TopBar;


/*

*/