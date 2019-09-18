import React, {useContext} from 'react';
import { GridItem } from '../index';
import { AppContext } from '../../context/AppContext';
import styles from './MenuGrid.module.css'

const MenuGrid = () => {
  const { menuGridItems } = useContext(AppContext);

  console.log(menuGridItems)

  return (
    <div>
      <span className={styles.menuTitle}>Menu</span>
      <div className={styles.menuGrid}>
        <div className={styles.menuGridItems}>
        {
          menuGridItems.map(item => {
            const image = item.image.asset._ref.split('image-')[1].replace('-jpg', '.jpg').replace('-png', '.png');
            return(
              <GridItem key={item._id} image={image} name={item.name.en} />  
            )          
          })
        }
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;
