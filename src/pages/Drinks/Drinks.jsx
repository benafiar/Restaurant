import React from 'react';
import { PageView } from '../../components';

const Drinks = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="DRINKS & COFFEE" color="#A1007C" />
    </div>
  );
};

export default Drinks;
