import React from 'react';
import { render } from 'react-dom';
import { LinkList } from './lib';
import { Link } from './lib';

import './index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LinkList>
          <Link id="test1" to="#test1">Link</Link>
          <Link id="test2" to="#test2">Link</Link>
          <Link id="test3" to="#test3">Link</Link>
        </LinkList>
      </div>
    );
  }
}

let node = document.getElementById('app');
render(React.createElement(App), node);
