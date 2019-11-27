import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css';
//import {SVGMap} from 'react-svg-map';

//import France from '@svg-maps/france.regions'

import TP from './temp_kartor/TP.png';
import TP4 from './temp_kartor/TP41.png';
import TP5 from './temp_kartor/TP51.png';


import K from './temp_kartor/K_2_vec.svg';
import overview from './temp_kartor/overview.jpg';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';


//Mål: Med hjälp av SVG-Maps och exempel, få nåt att funka (Link-map)/ Går inte måste ha en färdig karta gjord för detta
//Svin i SVGMap en så länge. Definera En <map> div med en definierad storlek. 

function goToRoom () {
    alert("skeetit");
}

function Letsfindit () {
  
}

//useWindowDimensions, curtosy https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

//Used in useWindowDimensions
function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
//useWindowDimenions returns to values, height and width of the viewport without reloading the page.
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


//Sends coords for popup and makes it visible
function popup(props) {
  alert("Use css left top retard");
  var puCoords = props.coords;
  console.log(puCoords);
}


//Takes in room position and clickable area size, returns an area with a onclick function popup
function roomArea (props) {


  var toString (props.coords[0], props.coords[1], props.coords[2]) {
    return width + ", " + height + ", " + size + ";";
  }


  var relCoords = props.coords;
  var absCoords = props.coords;

  return (
    <area shape="circle" coords={absCoords} alt="skeetit" onClick={popup}/>
    );
     
}

function App() {
  
  const {height, width} = useWindowDimensions();

  var roomCoords = [width/2, height/2, 50]; 

  return (
    <div className = "background">
      <header>
        <div> width: {width} ~ height: {height} </div>
        <div className="popup"><span className ="popuptext" id="myPopup">Im not in the right place :(</span></div>
          <img className = "map_image" src = {K} alt="kåkenhus_2" useMap="#K_usemap"/>
          <map className = "map" name="K_usemap">
            <roomArea coords="coords" /> 
            
          </map>
        
      </header>
    </div>
  );
}

export default App;
