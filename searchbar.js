import React,{useState} from 'react';
import rooms from './rooms.json';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";

import T3 from './temp_kartor/TP51.png';
import overview from './temp_kartor/overview.jpg';
import pin from './symbols/pin.png';


function SearchBar() 
{
  //console.log("In SearchBar " +props.selectedR);

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
  const [placeholder, setPlaceholder] = useState("Sök på sal... ");
  //const [clickedRoom]

console.log("searchString: " + searchString)

  function changeInput(event) 
  {
    
      setSearchString(event.target.value);
  }

  //console.log("onChange"+searchString);
  //console.log("In SearchFunction " +props.selectedR);

  function test(room) 
  {
    console.log("test: " + room)
    setSearchString(room); 

    foundRooms = [];

  }

  function hideSearchBar(event) 
  {

    //document.getElementById("searchBox").value = room;
    setSearchString("");
    
    //setSearchString(room);
    //console.log("test"+room);
    foundRooms = [];

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


//setSearchString("");
  
  //console.log(".. x. .. . .. . " + room);

  function getRoom()
  {

   // console.log(".. . .. . .. . " + room);

    // if(room == undefined) ///eller === 
    // {
    //   return "Sök sal...";
    // }
    // else
    // {
    //   return room; // eller toString(room);
    // }
  }
  
  

  return(
    <div>
      <div>
        {/*sökruta*/}
          <div className = "searchbar">
          <div id="cancelBig"> 
          <div id="cancel"> x </div>
          </div>
            <input type="text" id="searchBox" placeholder={placeholder} value={searchString} onChange={changeInput}/>
            
          </div>
          
          <div id= "listElement">
          {/*listar sökresultat fint*/}
            <div id ="listBox" >
              {foundRooms.slice(0,5).map(c => (<div onClick={ () => test(c.room) } ><RoomInfo data={c}  key={c.room}/></div>))}
            </div>
          </div>
      </div>
    </div>
  );
}
// onClick={hideSearchBar}
function RoomInfo(props)
{
   


  return(
    
    <Link className = "aa" to = {"/"+ props.data.house + "/" 
    +  props.data.floor + "/" + props.data.room 
    + "/" + props.data.coord.x + "/" + props.data.coord.y}>
    
      <div className="listOverlay">
        {props.data.room}
      </div>
    </Link> 
    
  );
}


export default SearchBar;


