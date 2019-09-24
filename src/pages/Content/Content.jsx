import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { PageView, PlaceHolder } from '../../components';
import { routeMapper } from '../../helpers';

const Content = ({ location, match }) => {
  const { loaded } = useContext(AppContext);
  const routeProps = routeMapper(location.pathname);

  return (
    <div>
      {loaded ? (
        <PageView match={match.path} {...routeProps} />
      ) : (
        <PlaceHolder />
      )}
    </div>
  );
};

export default withRouter(Content);
