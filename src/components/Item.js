import React from 'react';

class Item extends React.Component{
        constructor(props){
          super(props);
        }


          render(){
            console.log(this.props.list);
            const relative=(<ol key={"relativeList"}> {this.props.list}</ol>);
            
            // console.log(relative.key);
              return relative;
          }
}

export default Item;
