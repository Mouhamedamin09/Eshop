import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import logo from '../assets/ShOpy.png';
import search from '../assets/search.png';
import cart from '../assets/Untitled design 1.png';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><Link to="/">Catalog</Link></li>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Guide</Link></li>
        <li><Link to="/cart"><img src={cart} alt="Cart" className={styles.cartIcon} /></Link></li>
      </ul>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src={search} alt="Search" className={styles.searchLogo} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
