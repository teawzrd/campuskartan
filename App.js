import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";  

const Room = props =>
{
  return(
    <div className="commentContainer">
      <div className="commentText">Text of whatever</div>
      <button className="button-primary">Edit</button>
      <button className="button-danger">Delete</button>
    </div>
  )
}




function App()
{
  const [menuIsOpen, setMenuState] = useState(false);

  const toggleMenu = event =>
  {
    if(menuIsOpen)
    {
      setMenuState(false);
    }
    else if(!menuIsOpen)
    {
      setMenuState(true);
    }
  };

  const getMenu = () => {
     return(
      <div className="menu">
        <div>aaaaaaaaa</div>
        <div>bbbbbbb</div>
        <div>ccccccc</div>
        <div>dddddddd</div>
        <div>eeeeeee</div>

      </div>
    );
  }




  const [floor, setFloor] = useState(3);

  const up = event =>
  {
    setFloor(floor + 1);
  }

  const down = event =>
  {
    setFloor(floor - 1);
  }
  



  return(
    <div>
      <div className="top-bar">
        
        <div onClick={toggleMenu}>
          <img src="menu-icon.png" style={{ height:80 }} className="menu-button"/>
        </div>

        <div style={{ marginRight:20 }}>
          <p>Täppan</p> 
        </div>

        <div onClick={down}>
          <img src="arrow-down.png" style={{ height:30 }} className="arrow"/>
        </div>

        <div>
          <p>{floor}</p>
        </div>

        <div onClick={up}>
          <img src="arrow-up.png" style={{ height:30 }} className="arrow"/>
        </div>

      </div>

      { 
        menuIsOpen 
        && 
        getMenu() 
      }



      

      <div className="test" style={{ backgroundColor:'green' }}></div>
      <div className="test" style={{ backgroundColor:'darkgreen' }}></div>
      <div className="test" style={{ backgroundColor:'green' }}></div>
      <div className="test" style={{ backgroundColor:'darkgreen' }}></div>
      <div className="test" style={{ backgroundColor:'green' }}></div>
      <div className="test" style={{ backgroundColor:'darkgreen' }}></div>
      <div className="test" style={{ backgroundColor:'green' }}></div>
      <div className="test" style={{ backgroundColor:'darkgreen' }}></div>



    </div>
  );
}

export default App;


/*
function RoomTEST(arg1, arg2, arg3, arg4, arg5)
{
  this.roomName = arg1;
  this.level = arg2;
  this.type = arg3;
  this.house = arg4;
  this.coordinates = arg5;
}




function testFunction()
{
  let tp1 = new RoomTEST("tp1", 3, "Aula", "Täppan", "(1,2)");
  let tp2 = new RoomTEST("tp2", 3, "Aula", "Täppan", "(4,6)");
  let tp53 = new RoomTEST("tp53", 5, "Klassrum", "Täppan", "(4,8)");


  let rooms = [tp1, tp2, tp53];



  console.log(rooms);
}

*/