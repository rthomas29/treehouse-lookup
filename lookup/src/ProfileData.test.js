import React from 'react';
import ReactDOM from 'react-dom';
import ProfileData from './ProfileData';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileData />, div);
});
