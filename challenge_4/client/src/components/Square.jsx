import React from 'react';

var Square = (props) => {
  // console.log(props.value);
  let color = 'white';
  // console.log(props.value)
  if (props.value === 1) {
    color = 'red';
  } else if (props.value === 2) {
    color = 'yellow';
  }
  return  (
    <div 
    className="square" onClick={() => props.handleClick(props.x, props.y)} style={{backgroundColor:color}}>
    
    </div>
  )
  


}

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       played: false
//     }
//   }

//   handleSqClick() {
//     this.setState({
//       played: true
//     })
   
//     this.props.handleClick();

   

//   }




//   render() {
//     var color = 'white'
//     if (this.state.played) {
//       if (this.props.player1) {
//         color = 'blue';
//       } else {
//         color = 'red';
//       }
      
//     }
  
//     return (
      
//       <div className="square" onClick={this.handleSqClick.bind(this)} style={{backgroundColor:color}}>
//         {this.props.x},{this.props.y}
//       </div>
//     )
//   }   
// }
  
    



export default Square;

