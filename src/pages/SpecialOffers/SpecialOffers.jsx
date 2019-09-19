import React from 'react';
import { PageView } from '../../components';

const SpecialOffers = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="SPECIAL OFFERS" color="#AB1A2D" />
    </div>
  );
};

export default SpecialOffers;
