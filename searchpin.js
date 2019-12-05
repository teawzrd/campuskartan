import React,{useState} from 'react';
import { useParams } from "react-router-dom";

import pin from './symbols/pin.svg';

const SearchPin = () =>
{
	//let {info} = useParams();
	let {floor, room, x, y} = useParams();

    if(room === undefined)
    {
      console.log("hej------1 -- room = " + room);

      return(
        <div>
          <h1>ROOM IS UNDEFINED</h1>
        </div>
      );
    }

    else
    {
      console.log("hej------2 -- room = " + room);

      return(
        <div style={{
        position: "absolute",
        
/* här tar vi "riktiga" koordinaterna och lägger till det som blir extra från pin-bilden:   */
        left: (parseInt(x)) + "%", 
        top: (parseInt(y)) + "%",
        marginLeft: "-25px",
        marginTop: "-25px"
        
        }}>

          <img src={pin} className="pin" />

        </div>
      );
    }
}

export default SearchPin;

/*
style={{
          height: "100%",
          width: "100%",
          }}  
*/