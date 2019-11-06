import React, {useState} from 'react';
import rooms from './rooms.json';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import './App.css';

function App() {

  const [searchString, setSearchString] = useState("");

  function changeInput(event) {
      setSearchString(event.target.value);

  }
  
  const match = roomName => {
    const lowerCaseWord = roomName.room.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  var foundRooms = rooms.filter(match);
  
  return (
    
      <div>
      <div>
        <input type="text" placeholder="Sök en sal.. " onChange={changeInput} />
        <div id= "listElement">
      
          {foundRooms.slice(0,5).map(c => (<RoomInfo data={c} key={c.room}/>))}
        
      </div>
      </div>
    </div>

  );
}
function RoomInfo(props){
  return (
    
    
    <div>{props.data.room}</div>
    
  )
}

export default App;
