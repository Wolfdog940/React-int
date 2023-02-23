import React, { useEffect, useState } from "react"
import './App.css';

import Nabvar from './components/Nabvar';
import {IntlProvider}from "react-intl"
import messages from '../src/lang/index';
import Body from "./components/Body.jsx";

function App() {

const [local ,setLocal] = useState("es")

const locale = local

const mesagge = messages[local]

useEffect(()=>{
console.log(local)
},[local])

  return (
    <IntlProvider locale = {local} messages ={mesagge}>
      <Nabvar onLocal={setLocal}/>
      <Body/>
    </IntlProvider>
    
  );
}

export default App;
