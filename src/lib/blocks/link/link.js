import React from 'react';

export default (props) => {
  return <a href={props.to}>{props.children}</a>;
};
