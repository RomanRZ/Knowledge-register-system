import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/gallery'>Gallery</Link>
      </li>
      <li>
        <Link to='/managers-block'>Manager's Block</Link>
      </li>
      <li>
        <Link to='/coders-block'>Coder's Block</Link>
      </li>
      <li>
        <Link to='/contacts'>Contacts</Link>
      </li>
      <li>
        <Link to='/registration'>Registration</Link>
      </li>
    </ul>
  );
};

export default Navigation;
