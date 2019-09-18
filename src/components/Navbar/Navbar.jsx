import React, { useContext } from 'react';
import { NavItem } from '../index';
import { AppContext } from '../../context/AppContext';
import styles from './Navbar.module.css'

const Navbar = () => {
  const { sections } = useContext(AppContext);

  const navContents = sections.map(section => {
    return {
      id: section._id,
      carouselImage: section.carouselImage.asset._ref,
      name: section.name.en,
      image: section.image.asset._ref
    };
  });
  return (
    <div className={styles.navBar}>
      {navContents.map(item => {
        const carouselImage = item.carouselImage.split('image-')[1].replace('-png', '.png');
        const { name, id } = item;
        return <NavItem key={id} carouselImage={carouselImage} name={name} />;
      })}
    </div>
  );
};

export default Navbar;
