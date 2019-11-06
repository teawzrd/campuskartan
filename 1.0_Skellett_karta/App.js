import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Tell Webpack which image-files to use.
import TP3 from './temp_kartor/TP.png';
import TP4 from './temp_kartor/TP41.png';
import TP5 from './temp_kartor/TP51.png';

import K1 from './temp_kartor/K101.png';
import K2 from './temp_kartor/K23.png'; //OBS INGÅNG
import K3 from './temp_kartor/BYT_UT_MIG_SNÄLLA.jpg';
import K4 from './temp_kartor/K42.png';
import K5 from './temp_kartor/K501.png';


import overview from './temp_kartor/overview.jpg';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';

//TODO: LÄGG TILL ALT FÖR ALLA BILDER!


function App() {
  return (
  	//App hanterar endast routern
  	<Router>
    <div>
 		<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Täppan">
            <Tappan />
          </Route>
          <Route path="/Kåkenhus">
            <Kakenhus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
//Home-sida, överblicksvy
  return (
    <div>
      <div className = "background">
        <img src={overview} className = "background_image"/>
      </div>
    </div>
  );
}

function Tappan() {
	//floor = nuvarande våning, initialiseras med 3
	let [floor, setFloor] = useState(3);

	//minsta/högsta våning
	let bottom_floor = 3;
	let top_floor = 5;

	//kontrollerar att våningen finns
	if(floor < bottom_floor) {
			floor = bottom_floor;
	}

	if(floor > top_floor) {
			floor = top_floor;
	}

	console.log(floor);


	//Kallar på egen function för knappar samt bakgrund
	if(floor == bottom_floor) {
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={TP3} className = "background_image"/>
		</div>
    </div>
  	);
	}

	else if(floor == 4) {
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={TP4} className = "background_image"/>
		</div>
    </div>
  	);
	}

	else {
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={TP5} className = "background_image"/>
		</div>
    </div>
  	);
	}
}

function Kakenhus() {
	//floor = nuvarande våning, initialiseras med 2
	let [floor, setFloor] = useState(2);

	//minsta/högsta våning
	let bottom_floor = 1;
	let top_floor = 5;

	//kontrollerar att våningen finns
	if(floor < bottom_floor) {
			floor = bottom_floor;
	}

	if(floor > top_floor) {
			floor = top_floor;
	}

	console.log(floor);

	//Kallar på egen function för knappar samt bakgrund
	if(floor == bottom_floor) {
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K1} className = "background_image"/>
		</div>
    </div>
  	);
	}

	else if(floor == 2) {
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K2} className = "background_image"/>
		</div>
    </div>
  	);
	}

	else if(floor == 3){
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K3} className = "background_image"/>
		</div>
    </div>
    );
	}

    else if(floor == 4){
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K4} className = "background_image"/>
		</div>
    </div>
    );
	}

    else if(floor == 5){
	return (
	<div>
		<Buttons floor={floor} setFloor={setFloor}/>
		<div className = "background">
			<img src={K5} className = "background_image"/>
		</div>
    </div>
  	);
	}
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
