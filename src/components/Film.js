import React, {Component} from 'react';

class Film extends Component{
  render(){
      return(
        <div className = "film">
          <li>{this.props.children}</li>
        </div>
      )
    }
}

export default Film;
