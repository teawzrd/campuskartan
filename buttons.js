
import up_button from './symbols/up_arrow.png';
import down_button from './symbols/down_arrow.png';

import React,{useState} from 'react';
function Buttons(props) {
	return (
	<div id="up_down">
        <img src={up_button} className = "button" onClick={() => props.setFloor(props.floor+1)}/>
        <img src={down_button} className = "button" onClick={() => props.setFloor(props.floor-1)}/>
    </div>
    );
}

export default Buttons;