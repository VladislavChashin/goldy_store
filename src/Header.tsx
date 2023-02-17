import React from 'react';
import { Register } from './components/header/contact_register';
import { Search } from './components/header/navbar_search';


function Header() {
  return (
    <header>
      <Register/>
      <Search/>
    </header>
  );
}

export default Header
