import React from 'react';
import styles from './GridItem.module.css';
import homeColorPicker from '../../helpers/homeColorPicker';

const GridItem = ({ image, name }) => (
  <div className={styles.gridItemWrapper}>
    <img src={process.env.PUBLIC_URL + `../../images/${image}`} alt={name} />
    <span style={{ color: homeColorPicker(name) }}>{name}</span>
  </div>
);

export default GridItem;
