/* FUNCTIONS */
import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* COMPONENTS */
import Tappan from './tappan.js';
import Kakenhus from './kakenhus.js';
import TopBar from './topbar.js';
import SearchBar from './searchbar.js';
import Home from './home.js';
import HomeTopBar from './hometopbar.js';
import * as window from './useWindow.js'

/* STYLE */
import './App.css';

function App() {

window.getWindowDimensions();
const {height, width} = window.useWindowDimensions();

  return (


  	<div>
    <span>{height} ~ {width}</span>
    	<Router>
   		  <Switch>

          <Route exact path="/">
            <HomeTopBar />
            <SearchBar className = "search"/> 
            <Home />
          </Route>

          <Route exact path="/Täppan/:floor" component={Tappan}/> 
          <Route path="/Täppan/:floor/:room/:x/:y" component={Tappan}/>  
  
          <Route exact path="/Kåkenhus/:floor" component={Kakenhus}/> 
          <Route path="/Kåkenhus/:floor/:room/:x/:y" component={Kakenhus}/>  

         </Switch>
      </Router>

    </div>
  );
}


export default App;


//====================================================================//
//====================================================================//
//====================================================================//
//====================================================================//
// ATT GÖRA:s
//--------------------
//-To do: (TA BESLUT) diskutera hela gruppen om detta:
// se searchpin.js. Ska vi (går det att) anpassa koordinaten i den ist för att behöva manuellt
// i json-filen kompensera för de pixlar som pin-bilden tar upp?
//
//-To do: (TA BESLUT): diskutera hela gruppen om detta:
// ska vi ha searchbaren svävande strax under topbaren? Isf måste vi lösa det så
// att den placeras ovanpå kartan ist för ovanför, just nu kan inte kartan synas bakom
// utan är under den. Se designideer (3 bilder)
//
//TA BESLUT: ändra till Kåkenhus ist för Kåken i JSON
// (enkelt att göra)
//
//-TO do: fixa så att kåkenhus går att använda igen med den mergade versionen.
//
//-To do: fixa så att det inte går att gå ovanför top floor i respektive byggnad
//
//-To do: Göra så att när man klickar på ett rum i searchbaren så ska rutan med 
// 5 rum försvinna. Detta "löstes" innan genom att man skickades till en annan sida
// men så kan vi inte göra nu
//
//-To do: lägg till en liten kryssymbol längst till höger i searchbaren som man kan ta bort
// "TP53" exempelvis, om man sökt på denna, så blir searchbaren tom och så försvinner pin-bilden
// på kartan.
// 
//-To do: fixa nya symboler för hemknappen
//
//fixa så att statet floor hämtas från url:en vid reload
//
//-To do: fixa hjälprutan (Max har en bra ide på hur den ska kodas, med { a && b} 
// som skrivs ut om "a == true" )
//
//detta stod sedan innan:
//TODO: LÄGG TILL ALT FÖR ALLA BILDER!
//
////////////LÄGRE PRIO:
//---------------------------
//-fixa nya symboler för upp och ner på våningar och hem/tillbaka-knappen
//
//
//
//
//====================================================================//
//====================================================================//
//====================================================================//
//====================================================================//
