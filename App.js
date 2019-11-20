import React,{useState} from 'react';
import rooms from './rooms.json';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Tell Webpack which image-files to use.
import TP from './temp_kartor/TP.png';
import TP4 from './temp_kartor/TP41.png';
import TP5 from './temp_kartor/TP51.png';


import K2 from './temp_kartor/K_2.svg';
import T3 from './temp_kartor/TP_3.svg';

import overview from './temp_kartor/overview.jpg';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';


function App() {
  return (
  	//App hanterar endast routern
  	<Router>
    <div>
 		<Switch>
          <Route path="/Täppan">                                                    
            <Tappan />
          </Route>
          <Route path="/Kåkenhus">   
            <Kakenhus />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//Home-sida, överblicksvy
function Home() {

//hanterar sökfunktion
  const [searchString, setSearchString] = useState("");

  function changeInput(event) {
      setSearchString(event.target.value);

  }

  //function
  //hittar match beroende på sökord
  const match = roomName => {
    const lowerCaseWord = roomName.room.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }
//hittade rum
var foundRooms = [];
  if(searchString != ""){
    var foundRooms = rooms.filter(match); 
  }
  

  return (
    <div>
      <div>
      <div className = "topbar"></div>
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
        <div className = "background">
        <img src={overview} className = "background_image"/>
        </div>
        
      </div>
    </div>
  );
}
//varje rad i dropdown  + props.data.house
function RoomInfo(props){
  return (
    <Link className = "aa" to = {"/Täppan" }>
    <div className="listOverlay">
    {props.data.room}
    </div>
    </Link>
  )
}

function Tappan() {
	let bottom_floor = 3;
	let top_floor = 5;
	let current_floor = bottom_floor;

  const [floor, setFloor] = useState(3);
  console.log(floor);

	//Kallar på egen function för knappar samt bakgrund
	if(current_floor == bottom_floor) {
		return (
			<div>
			<Buttons floor={floor} setFloor={setFloor}/>
			<div className = "background">
				<img src={T3} className = "background_image"/>
			</div>
    </div>
  	);
	}

	else if(current_floor == 4) {
		return (
			<div>
			<Buttons />
			<div className = "background">
				<img src={TP4} className = "background_image"/>
			</div>
    </div>
  	);
	}

	else {
		return (
			<div>
			<Buttons />
			<div className = "background">
				<img src={TP5} className = "background_image"/>
			</div>
    </div>
  	);
	}
	
}

function Kakenhus() {
	const [floor, setFloor] = useState(3);
	console.log(floor);

//Kallar på egen function för knappar samt bakgrund
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K2} className = "background_image"/>
		</div>
    </div>
  );
}

function Buttons(props) {
	return (
	<div id="up_down">
        <img src={up_button} className = "button" onClick={() => props.setFloor(props.floor+1)}/>
        <img src={down_button} className = "button" onClick={() => props.setFloor(props.floor-1)}/>
    </div>
    );
}



export default App;


