import React,{useState} from 'react';
import rooms from './rooms.json';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";

import T3 from './temp_kartor/TP51.png';
import overview from './temp_kartor/overview.jpg';
import pin from './symbols/pin.png';

let showList = true;


function SearchBar(props) 
{
  //console.log("In SearchBar " +props.selectedR);

  return(
    <div style={  {/*backgroundColor: 'darkgreen'*/} }>
      <SearchFunction building={props}/>
    </div>
  );
}


 

//sökfunktionen
function SearchFunction(props) 
{
  //hanterar sökfunktion
  const [searchString, setSearchString] = useState("");
  const [placeholder, setPlaceholder] = useState("Sök på sal... ");
  //const [clickedRoom]

console.log("searchString: " + searchString)

  function changeInput(event) 
  {
    
      setSearchString(event.target.value);
      showList = true;
  }

  //console.log("onChange"+searchString);
  //console.log("In SearchFunction " +props.selectedR);

  function test(room) 
  {
    console.log("test: " + room)
    setSearchString(room); 

    foundRooms = [];

    showList = false;

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
  console.log(props.building);
  

  return(
    <div>
      <div>
        {/*sökruta*/}
          <div className = "searchbar">
            <input type="text" id="searchBox" placeholder={placeholder} value={searchString} onChange={changeInput}/>
            {/*<Link to={"/" + props.building}>*/}

          </div>
          
          <div id= "listElement">
          {/*listar sökresultat fint*/}
            <div id ="listBox">
              {foundRooms.slice(0,5).map(c => (<div onClick={ () => test(c.room) } ><RoomInfo data={c} state={showList} key={c.room}/></div>))}
            </div>
          </div>
      </div>
    </div>
  );
}
// onClick={hideSearchBar}
function RoomInfo(props)
{
   
if(props.state){

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
else{

return(
<div></div>
  );
}
}


export default SearchBar;


