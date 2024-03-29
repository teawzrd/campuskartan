import React from 'react';
import './App.css';
import './topbar.css';
import upButton from './symbols/up_white.svg';
import downButton from './symbols/down_white.svg';
import bUpButton from './symbols/up_grey.svg';
import bDownButton from './symbols/down_grey.svg';
import homeButton from './symbols/home.svg'; 
import pin from './symbols/pin.svg';





const InfoBox = () => {
   return (
    <div className='infoBox'>
      <div>
        
        <p><img src={upButton} alt={'upButton'} style={{width: '50px'}}/>
           <img src={downButton} alt={'downButton'} style={{width: '50px'}}/>Byt mellan våningar</p>
        <p><img src={pin} alt={'pin'} style={{width: '50px'}}/>Eftersökta rum</p>
      </div>
      <p> Campuskartan är utveklad av ett härligt gäng MT-studenter och var del av ett projekt i kursen 
      TNM040 (Kommunikation och användargränssnitt). </p>
    </div>
  );
}

export default InfoBox;