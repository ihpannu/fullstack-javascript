import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { setTimeout } from 'timers';

import data from './testData';

ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('app')
);
// setTimeout(() => {
//   ReactDOM.render(<h3>Hello World</h3>, document.getElementById('app'));
// }, 3000);
