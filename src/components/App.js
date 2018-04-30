import React, { Component } from 'react';
import { Header } from './Header';
import { ContestPreview } from './contestPreview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pageHeader: 'Naming Contests' };
  }
  // componentDidMount() {
  //   console.log('did mount');
  // }

  // componentWillUnmount() {
  //   console.log('will unmount');
  // }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest => (
            <ContestPreview {...contest} key={contest.id} />
          ))}
        </div>
      </div>
    );
  }
}
