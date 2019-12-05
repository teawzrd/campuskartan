import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";
import Buttons from './buttons.js';
import TopBar from './topbar.js';
import SearchBar from './searchbar.js';
import SearchPin from './searchpin.js';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_white.svg';
import upButton from './symbols/up_white.svg';


const Tappan = props => 
{        // ersätt "floor" med "props.floorTest" <---- ???? va??

	let {floor, room, x, y} = useParams();

	return(
        <div>

        	<TopBar building={"Täppan"} floorFromURL={floor}/>
        	<SearchBar />	


			<div className="background">

				<img src={require('./maps/TP_' + floor + '.svg')} className="background_image"/>
				<SearchPin />
			</div>


			
			
	    </div>
	  
	);
}

export default Tappan;
