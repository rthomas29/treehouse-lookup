import React from 'react';

const Header = () => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          lookup
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
};

export default Header;
