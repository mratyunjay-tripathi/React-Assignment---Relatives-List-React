import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {
    
 relatives = ["chacha", "mama", "phupha", "bua"];

   
    render(){
        console.log("hello");
        return(
            <div id="main">
               <ol key="relativeList">
                {this.relatives.map((relative, indx) => (
          <li key={"relativeListItem" + (indx + 1)}>{relative}</li>
                 ))}
                 </ol>
            </div>
        );
     }
};


export default App;
