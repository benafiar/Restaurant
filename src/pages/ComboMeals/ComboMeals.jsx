import React from 'react';
import { PageView } from '../../components';

const ComboMeals = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="COMBO MEALS" color="#AB1A2D" />
    </div>
  );
};

export default ComboMeals;
