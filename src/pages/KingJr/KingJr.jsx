import React from 'react';
import { PageView } from '../../components';

const KingJr = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="KING JR." color="#92BFEA" />
    </div>
  );
};

export default KingJr;
