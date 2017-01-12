import React from 'react';

// this is a class component which can have state
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update ( e ) {
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
      <h1>{this.state.txt}</h1>
      <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
<input type="text" onChange={props.update}/>


// here is another example, cannot export both though
// class App extends React.Component {
//   render(){
//     return <Button> I <Heart /> React</Button>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//   render(){
//     return <span>&hearts;</span>
//   }
// }

export default App
