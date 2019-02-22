import React from 'react';
import {Link} from 'react-router-dom';

const links = [
  {path: '/', text: 'Home'},
  {path: '/memo', text: 'Memo'},
  {path: '/memo/hoge', text: 'Memo/Hoge'},
  {path: '/profile', text: 'Profile'},
];

const Header = () => (
  <>
    {links.map(link => (
      <div key={link.path}>
        <Link to={link.path}>{link.text}</Link>
      </div>
    ))}
    <hr />
  </>
);
export default Header;
