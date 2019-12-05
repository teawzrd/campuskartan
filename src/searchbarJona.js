import React,{useState} from 'react';
import rooms from './rooms.json';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import T3 from './temp_kartor/TP51.png';
import overview from './temp_kartor/overview.jpg';
import pin from './symbols/pin.png';


function SearchBar() 
{
  return(
    <div style={  {/*backgroundColor: 'darkgreen'*/} }>
      <SearchFunction />
    </div>
  );
}



//sökfunktionen
function SearchFunction() 
{
  //hanterar sökfunktion
  const [searchString, setSearchString] = useState("");

  function changeInput(event) 
  {
      setSearchString(event.target.value);
  }

  const hideSearchBar = () =>
  {
    setSearchString("");
    //console.log("xxxxxxx    xxxx");
  }


  //function
  //hittar match beroende på sökord
  const match = roomName => 
  {
    const lowerCaseWord = roomName.room.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  //hittade rum
  var foundRooms = [];

  if(searchString != "")
  {
    var foundRooms = rooms.filter(match); 
  }

  //varje rad i dropdown  + props.data.house
  
  

  return(
    <div>
      <div>
        {/*sökruta*/}
          <div className = "searchbar">
            <input type="text"  placeholder="Sök en sal.. " onChange={changeInput}/>
          </div>
          
          <div id= "listElement">
          {/*listar sökresultat fint*/}
            <div id ="listBox">
              {foundRooms.slice(0,5).map(c => (<RoomInfo data={c} key={c.room}/>))}
            </div>
          </div>
      </div>
    </div>
  );
}

function RoomInfo(props)
{
  return(
    <Link className = "aa" to = {"/"+ props.data.house + "/" 
    +  props.data.floor + "/" + props.data.room 
    + "/" + props.data.coord.x + "/" + props.data.coord.y}
    >
      <div className="listOverlay">
        {props.data.room}
      </div>
    </Link> 
  );
}


export default SearchBar;


