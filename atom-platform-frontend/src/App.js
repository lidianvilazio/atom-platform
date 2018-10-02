import React, { Component } from 'react';
import './App.css';
import AllLessons from './Components/AllLessons'


class App extends Component {

  state = {
    data: []    // store data
  }

  async componentDidMount() {
    const response = await fetch(`/users`);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {

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
