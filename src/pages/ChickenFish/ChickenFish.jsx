import React from 'react';
import { PageView } from '../../components';

const ChickenFish = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="CHICKEN & FISH" color="#ED7701" />
    </div>
  );
};

export default ChickenFish;
