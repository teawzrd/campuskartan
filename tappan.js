import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";
import Buttons from './buttons.js';
import TopBar from './topbar.js';
import SearchBar from './searchbar.js';
import SearchPin from './searchpin.js';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';
import upButton from './symbols/up.png';


const Tappan = props => 
{        // ersätt "floor" med "props.floorTest" <---- ???? va??

	let {floor, room, x, y} = useParams();

	return(
        <div>

        	<TopBar building={"Täppan"} floorFromURL={floor}/>
        	<SearchBar selectedRoom="22" />	

			<div className = "background">
				<img src={require('./temp_kartor/TP_floor' + floor + '.svg')} className="background_image"/>
				<br/><br/>
				You are now on floor: {floor}
			</div>

			<SearchPin />

	    </div>
	  
	);
}

export default Tappan;
