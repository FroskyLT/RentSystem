import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import HeaderMenu from './HeaderMenu';

export const Header = ({ loggedIn, logout }: { loggedIn: boolean, logout: () => void }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          className={styles.logo}
          alt="logo"
          src="https://img.freepik.com/premium-vector/bike-cycling-clean-logo-design_284881-278.jpg?w=2000"
        />
      </Link>
      {loggedIn && <div className={styles.buttons}>
        <HeaderMenu logout={logout}/>
      </div>
      }
    </header>
  );
}

export default Header;
