import React, { Component } from 'react';
import { Header } from './Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pageHeader: 'Naming Contests' };
  }
  componentDidMount() {
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
      </div>
    );
  }
}
