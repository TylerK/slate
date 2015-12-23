import React, { PropTypes } from 'react';
import './link-list.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  render() {
    return (
      <ul className='link-list'>
        {this.props.children.map(child => {
          return (
            <li key={child.props.id}>{child}</li>
          );
        })}
      </ul>
    );
  }
}
