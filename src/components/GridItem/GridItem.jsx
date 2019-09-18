import React from 'react';
import styles from './GridItem.module.css'

const GridItem = ({ image, name }) => {
  return (
    <div className={styles.gridItemWrapper}>
      <img
        src={process.env.PUBLIC_URL + `../../images/${image}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

export default GridItem;
