import React, { PropTypes } from 'react';
import './Button.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
  }

  static propTypes = {
    type: PropTypes.oneOf(['default', 'alert', 'success', 'disabled']).isRequired,
    children: PropTypes.string.isRequired,
    action: PropTypes.func
  }

  _handleClick(e) {
    e.preventDefault();

    if (this.props.action) {
      return this.props.action();
    }
  }

  _handleOver() {
    this.setState({ status: 'hovered' });
  }

  _handleOut() {
    this.setState({ status: '' });
  }

  render() {
    return this.renderButton();
  }

  renderButton() {
    let { children, type } = this.props;
    let { status } = this.state;
    let buttonStatus = status ? `is-${status}` : '';

    let regularButton = (
      <button
        className={`button button-${type} ${buttonStatus}`}
        onClick={::this._handleClick}
        onFocus={::this._handleOver}
        onBlur={::this._handleOut}
        onMouseOver={::this._handleOver}
        onMouseOut={::this._handleOut}
      >
        { children }
      </button>
    );

    let disabledButton = (
      <button className="button button-disabled">
        { children }
      </button>
    );

    return this.props.type === 'disabled' ? disabledButton : regularButton;
  }
}
