import React from 'react';
import styles from './NavItem.module.css'

const NavItem = ({ carouselImage, name }) => (
  <div className={styles.sectionWrapper}>
    <img src={process.env.PUBLIC_URL + `../../images/${carouselImage}`} alt={name} />
    <span>{name}</span>
  </div>
);

export default NavItem;
