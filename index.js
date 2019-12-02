import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datae :[
        {
        "id": 1,
        "name": "test",
        "age": "21"
        },
        {
        "id": 2,
        "name": "tesefdst",
        "age": "22"
        },
        {
        "id": 3,
        "name": "tsdsdest",
        "age": "24"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
        <table>
        <tbody> 
         {this.state.datae.map((person, i) => <Row key = {i} 
          datae = {person}/> ) }
 
        </tbody>
        </table>
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
        <div>
         <h1>  Header </h1>
        </div>
    )
  }
}

class Row extends React.Component {
  render() {
    return(
      <tr>
      <td> {this.props.datae.id} </td>
      <td> {this.props.datae.name} </td>
      <td> {this.props.datae.age} </td>
      </tr>
    )
  }
}
render(<App />, document.getElementById('root'));
