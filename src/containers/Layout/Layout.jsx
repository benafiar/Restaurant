import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Layout.module.css';
import { Navbar } from '../../components';

const Layout = ({ match, children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar match={match} />
      {children}
    </div>
  );
};

export default withRouter(Layout);
