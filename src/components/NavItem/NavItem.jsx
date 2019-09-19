import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';
import routeHelper from '../../helpers/routeHelper';

const NavItem = ({ carouselImage, name, currentPath }) => {

  const wrapperStyles = [styles.sectionWrapper]

  if(currentPath === routeHelper(name)) wrapperStyles.push(styles.active)

  return (
    <Link to={routeHelper(name)} >
      <div className={wrapperStyles.join(" ")}>
        <img
          src={process.env.PUBLIC_URL + `../../images/${carouselImage}`}
          alt={name}
        />
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
