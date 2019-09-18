import React, { useContext } from 'react';
import styles from './NavItem.module.css';
import { AppContext } from '../../context/AppContext';

const NavItem = ({ carouselImage, name, items }) => {
  const { allItems, menuGridItems, setMenuGridItems } = useContext(AppContext);

  console.log(items, "<><><><><><>")
  console.log(allItems.flat(), "!!!!!!!!")
  console.log(menuGridItems)

  const handleNavClick = async () => {
    const currentSelection = [...allItems.flat()].filter(item=>{
      return items.includes(item._id)
    })
    setMenuGridItems([...currentSelection])
  }

  return (
    <div className={styles.sectionWrapper} onClick={handleNavClick}>
      <img
        src={process.env.PUBLIC_URL + `../../images/${carouselImage}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
