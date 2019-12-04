import React from 'react';
import './App.css';
import upButton from './symbols/up.png';
import downButton from './symbols/down.png';
import homeButton from './symbols/home.svg'; 





const InfoBox = () => {
   return (
    <div className='infoBox'>
      <div>
        <p><img src={homeButton} alt={'homeButton'} style={{width: '50px'}}/>Return to overview</p>
        <p><img src={upButton} alt={'upButton'} style={{width: '50px'}}/>
           <img src={downButton} alt={'downButton'} style={{width: '50px'}}/>Change between floors</p>
      </div>
    </div>
  );
}

export default InfoBox;