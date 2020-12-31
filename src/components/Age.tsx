import React, { Component } from 'react';


export interface AgeState {
  age:number;
  AgeUp:()=>void;
  AgeDown:()=>void
}

class Age extends Component {
  constructor(props:AgeState) {
    super(props)
       this.state={
        age:21
    };
  }

 AgeUp=()=>{
  console.log("Age Up");
  
  }
  AgeDown=()=>{
  console.log("age down");

  }
  render() {
    return (
      <div>
        <div>Age is </div>
        <button onClick={()=>this.AgeUp}>Age UP</button>
        <button onClick={()=>this.AgeDown}>Age down</button>
      </div>
    )
  }
}

export default Age;

