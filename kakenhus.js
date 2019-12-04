
import React,{useState} from 'react';
import './App.css';

import Buttons from './buttons.js';

import TopBar from './topbar.js';

import {BrowserRouter as Router, useParams} from "react-router-dom";

import SearchBar from './searchbar.js';
import SearchPin from './searchpin.js';


import overview from './temp_kartor/overview.jpg';
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';


const Kakenhus = props => {
	//floor = nuvarande våning, initialiseras med 2

	let {floor, room, x, y} = useParams();

	return(
	    <div>
	    	<TopBar building={"Kåkenhus"} floorFromURL={floor}/>
	    	<SearchBar />	

			<div className = "background">
				<img src={require('./temp_kartor/K_floor' + floor + '.png')} className="background_image"/>
				<br/><br/>
				You are now on floor: {floor}
			</div>

			<SearchPin />
	    </div>
	);
}




export default Kakenhus;
