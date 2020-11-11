import React, {Component, useState} from "react";
import '../styles/App.css';
import Item from './Item';

class App extends Component {
    
    const numbers = [ 1, 2, 3, 4, 5 ]; 
   const relative=numbers.map((number) => 
              (<li key={"relativeListItem"+number.toString()}>{"relative"+number}</li>));

    render() {

        return(
            <div id="main">
               <Item list={relative}/>
            </div>
        )
    }
}


export default App;
