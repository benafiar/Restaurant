import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.css';
import { AppContext } from '../../context/AppContext';
import routeHelper from '../../helpers/routeHelper';

const NavItem = ({ carouselImage, name, items }) => {
  const { allItems, menuGridItems, setMenuGridItems } = useContext(AppContext);

  // console.log(items, '<><><><><><>');
  // console.log(allItems.flat(), '!!!!!!!!');
  // console.log(menuGridItems);

  const handleNavClick = () => {
    // const currentSelection = [...allItems.flat()].filter(item => {
    //   return items.includes(item._id);
    // });
    // setMenuGridItems([...currentSelection]);
  };

  return (
    <Link to={routeHelper(name)} onClick={handleNavClick}>
      <div className={styles.sectionWrapper}>
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
