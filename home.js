import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import overviewMap from './maps/overview.svg';
//import T3 from './temp_kartor/TP.png';

//bound sent as props
function Overview(props) 
{
  //120, 30
  //287, 151
  //var upperBound = [120, 30];
  //var lowerBound = [287, 151];

  var bound = [120, 30, 287, 151];

  const dimToString = area => 
  {
    return (area[0] + ", " + area[1] + ", " + area[2] + ", " + area[3] + ";")
  }

  var tappanDim = dimToString(bound);



  return(
    <div> 
      <img src={overviewMap} alt="overviewMap" id="overwiewImg"  useMap="#overview"/>
        <map name="overview">
          <Link to={"/Täppan/3"}> <area shape="rect" coords={tappanDim} alt="tappan"/> </Link>
        </map>
        <h1><a href="/Kåkenhus/2">Länk till Kåkenhus</a></h1>
    </div>
  );
}


function Home() 
{
  return( 
    <Overview />
  );
}

export default Home;