import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as window from './useWindow.js'
import overviewMap from './maps/overview.svg';
//import T3 from './temp_kartor/TP.png';

//bound sent as props
function Overview(props) 
{
  window.getWindowDimensions();
  const {height, width} = window.useWindowDimensions();

  /*width, height*/
  /*Totalt*/
  /*1000, 1146*/
  /*Täppan*/
  /*174, 17 --- 516, 210*/
  /*Spetsen*/
  /*600, 0 --- 768, 210*/
  /*Kåken*/
  /*164, 372 --- 707, 627*/
  /*Kopparhammaren*/
  /*39, 960 --- 860, 1145*/

  //the map can stretch above or below the viewport height, but the image always takes up 100% width viewport.
  //In other words, the image always has the same ratio (width and height) allthough scaled to so width == viewport width
  //Vi antar att width = 1000
  //Width: 0 -> max (1000), 0 * viewportW/width = 0, max * viewportW/width = viewportW (edge of the viewport)
  //Height: 0 -> max (1146), 0 * viewportW/width = 0, max * viewportW/width = height * (viewportW/width) 

  console.log({width, height});


  const mapRatio = 1146/1000; //img height/ img width
  var tappan = [174, 17, 516, 210];
  var kaken = [164, 372, 707, 627];
  console.log(mapRatio);

  const dimToString = area => 
  {
    var fitting = width/1000;
    return (area[0]*fitting  + ", " + area[1]*fitting + ", " + area[2]*fitting + ", " + area[3]*fitting + ";")
  }

  console.log(dimToString(tappan));
  console.log(dimToString(kaken));

  return(
    <div> 
      <img src={overviewMap} alt="overviewMap" id="overwiewImg"  useMap="#overview"/>
        <map name="overview">
          <Link to={"/Täppan/3"}> <area shape="rect" coords={dimToString(tappan)} alt="tappan"/> </Link>
          <Link to={"/Kåkenhus/2"}> <area shape="rect" coords={dimToString(kaken)} alt="kakenhus"/> </Link>
        </map>
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