import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});
