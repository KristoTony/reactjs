import React, { Component } from 'react';
import Component1 from './Components/Component1.js';
import './App.css';


class App extends Component {

  state = {
    Components:[
      {Cno:4,Ano:23},
      {Cno:5,Ano:25}
    ],
    showcomponent1: false,
    showcomponent2: false,
  }

  SwitchComponentHandler = () =>{
    //console.log("switching in finesse");
    this.setState(
      {
        Components:[
          {Cno:1,Ano:23},
          {Cno:5,Ano:36}
        ]
      }
    )
  }

toggleComponentHandler1 = () => {
  const first=this.state.showcomponent1;
  this.setState({showcomponent1:!first})
}

toggleComponentHandler2 = () => {
  const second=this.state.showcomponent2;
  this.setState({showcomponent2 : !second})
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let Components = null;
    if(this.state.showcomponent1){
        Components = (
          <div>
            <Component1 Cno={this.state.Components[0].Cno} Ano= {this.state.Components[0].Ano}/>
          </div>
        )
    };
    if(this.state.showcomponent2){
        Components=(
          <div>
            <Component1 Cno={this.state.Components[1].Cno} Ano= {this.state.Components[1].Ano}>I'm not the real one</Component1>
          </div>
        )
    };

    return (
      <div className="App">
        <p>Hello lets, get started!!!</p>
        <button style={style} onClick={this.toggleComponentHandler1} >toggling Component 1 in finesse! ;)</button>
        <button style={style} onClick={this.toggleComponentHandler2} >toggling Component 2 in finesse! ;)</button>
        { Components }
      </div>
    );
  }
}

export default App;
