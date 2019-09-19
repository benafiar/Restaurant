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
      sectionItems: section.options.map(option => option._ref)
    };
  });
  return (
    <div className={styles.navBar}>
      {navContents.map(item => {
        const carouselImage = item.carouselImage.split('image-')[1].replace('-png', '.png');
        const { name, id, sectionItems } = item;
        return <NavItem key={id} carouselImage={carouselImage} name={name} items={sectionItems} />;
      })}
      <a href="/">HOME</a>
    </div>
    
  );
};

export default Navbar;
