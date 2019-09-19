import React from 'react';
import { PageView } from '../../components';

const Sweets = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="SWEETS" color="#0070CD" />
    </div>
  );
};

export default Sweets;

