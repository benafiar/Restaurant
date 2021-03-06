import React, { useContext } from 'react';
import { GridItem } from '../index';
import { AppContext } from '../../context/AppContext';
import styles from './MenuGrid.module.css';
import uuidv4 from 'uuid/v4';

const MenuGrid = ({ header, color }) => {
  const { menuGridItems } = useContext(AppContext);

  return (
    <div>
      <span className={styles.menuTitle} style={{ color: `${color}` }}>
        {header}
      </span>
      <div className={styles.menuGrid}>
        <div className={styles.menuGridItems}>
          {menuGridItems.map(item => {
            const image = item.image.asset._ref.split('image-')[1].replace('-jpg', '.jpg').replace('-png', '.png');
            return (
              <GridItem key={uuidv4()} image={image} name={item.name.en} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;
