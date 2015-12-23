import React from 'react';
import { render } from 'react-dom';
import { Button } from './lib/blocks';

import './index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Button type='disabled'>Press me</Button>
      </div>
    );
  }
}

let node = document.getElementById('app');
render(React.createElement(App), node);
