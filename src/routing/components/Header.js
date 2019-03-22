import React from 'react';
import {Link} from 'react-router-dom';

const links = [
  {path: '/routing', text: 'Home'},
  {path: '/routing/memo', text: 'Memo'},
  {path: '/routing/memo/hoge', text: 'Memo/Hoge'},
  {path: '/routing/profile', text: 'Profile'},
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
