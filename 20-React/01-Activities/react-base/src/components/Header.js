import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles ={
  header {
    background: '#b71775';
    height: '200px';
  }
  
  header_h1 {
    margin: '0';
    paddingtop:'75px';
    textalign:'center';
    color:'white';
    fontsize:'3rem';
  }


function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
