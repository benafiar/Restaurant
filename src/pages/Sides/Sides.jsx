import React from 'react';
import { PageView } from '../../components';

const Sides = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="SIDES" color="#F6A800" />
    </div>
  );
};

export default Sides;
