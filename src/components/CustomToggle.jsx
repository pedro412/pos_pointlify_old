/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <span onClick={this.handleClick}>
        {this.props.children}
        <FaChevronDown className='ml-2' />
      </span>
    );
  }
}

export default CustomToggle;
