import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import styles from './NavItem.module.css';
import { AppContext } from '../../context/AppContext';
import routeHelper from '../../helpers/RouteHelper'

const NavItem = ({ carouselImage, name, items }) => {
  const { allItems, menuGridItems, setMenuGridItems, sectionItems, setSectionItems } = useContext(AppContext);

  const handleNavClick = () => {
    setSectionItems([...items])
    // const currentSelection = [...allItems.flat()].filter(item=>{
    //   return items.includes(item._id)
    // })
    // setMenuGridItems([...currentSelection])
  }

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
