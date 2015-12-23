import React from 'react';
import { render } from 'react-dom';
import { Button } from './lib';

import './index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Button type='success'>Press me</Button>
      </div>
    );
  }
}

let node = document.getElementById('app');
render(React.createElement(App), node);
