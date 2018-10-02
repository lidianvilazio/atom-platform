import React, { Component } from 'react';
import './App.css';
import AllLessons from './Components/AllLessons'


class App extends Component {

  state = {
    data: []    // store data
  }

  async componentDidMount() {
    const response = await fetch(`/users`);  // address is locaded in package.json file pronxy
    const json = await response.json();  // feching asynchronously
    this.setState({ data: json });
  }

  render() {
     // passing data to child
    return (
      <div className='mdl-layout__inner-container'>
        <div className='mdl-layout__content mdl-color-text--grey-600 color'>
         <AllLessons data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
