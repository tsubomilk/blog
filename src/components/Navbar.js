import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        {/* 他のナビゲーションリンク */}
      </ul>
    </nav>
  );
}

export default Navbar;
