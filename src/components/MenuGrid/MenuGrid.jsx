import React, {useContext, useState, useEffect} from 'react';
import { GridItem } from '../index';
import styles from './MenuGrid.module.css'
import uuidv4 from "uuid/v4";

const MenuGrid = ({header, menuItems}) => {
  const [thing, setThing] = useState(false)

  console.log(menuItems, "menuItems")
  return (
    <div>
      <span className={styles.menuTitle}>{header}</span>
      <div className={styles.menuGrid}>
        <div className={styles.menuGridItems}>
        {
          menuItems && menuItems.map(item => {
            const image = item.image.asset._ref.split('image-')[1].replace('-jpg', '.jpg').replace('-png', '.png');
            return(
              <GridItem key={uuidv4()} image={image} name={item.name.en} />  
            )          
          })
        }
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;
