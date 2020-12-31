import React, { useState } from 'react';
import './App.css';
import ButtonOne from './components/ButtonOne' 
import Age from './components/Age'

export interface AppState {
  disable: boolean;
  name?: string;
}


const App=()=> {
  const [userState, setUserState]=useState<AppState>({
    disable:true,
    name:'athul p'
  });

  return (
    <div className="App"> 
     <ButtonOne  disable={userState.disable}/>
     <Age/>
    </div>
  );
}


export default App;
