import React from 'react';
import { PageView } from '../../components';

const Beef = ({ match }) => {
  return (
    <div>
      <PageView
        match={match.path}
        header="FLAME GRILLED BEEF"
        color="#8B542F"
      />
    </div>
  );
};

export default Beef;
