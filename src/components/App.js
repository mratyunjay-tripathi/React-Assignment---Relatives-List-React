import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {
    
    const relatives = ["chacha", "mama", "phupha", "bua"];

   

        return(
            <div id="main">
               <ol key="relativeList">
                {relatives.map((relative, indx) => (
          <li key={"relativeListItem" + (indx + 1)}>{relative}</li>
                 ))}
                 </ol>
            </div>
        );
    
}


export default App;
