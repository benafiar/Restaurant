import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import { routeHelper } from '../../helpers';

const NavItem = ({ carouselImage, name }) => (
  <NavLink to={routeHelper(name)}>
    <div className={styles.sectionWrapper}>
      <img
        src={process.env.PUBLIC_URL + `../../images/${carouselImage}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  </NavLink>
);

export default NavItem;
