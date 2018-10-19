import React from 'react';

// var Square = (props) => (

//   <div className="square" onClick={props.handleClick}>
    
//   </div>


// )

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      played: false
    }
  }

  handleSqClick() {
    this.setState({
      played: true
    })
   
    this.props.handleClick();

   

  }




  render() {
    var color = 'white'
    if (this.state.played) {
      if (this.props.player1) {
        color = 'blue';
      } else {
        color = 'red';
      }
      
    }
  
    return (
      
      <div className="square" onClick={this.handleSqClick.bind(this)} style={{backgroundColor:color}}>
        {this.props.x},{this.props.y}
      </div>
    )
  }   
}
  
    



export default Square;

