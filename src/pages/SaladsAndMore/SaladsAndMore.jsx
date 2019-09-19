import React from 'react';
import { PageView } from '../../components';

const SaladsAndMore = ({ match }) => {
  return (
    <div>
      <PageView match={match.path} header="SALADS & MORE" color="#59980E" />
    </div>
  );
};

export default SaladsAndMore;
