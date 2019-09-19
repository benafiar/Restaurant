import React, { useEffect, useContext, useCallback } from 'react';
import { MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';

const Home = ({ match }) => {
  const { setMenuGridItems, sections } = useContext(AppContext);

  const setHomePage = useCallback(() => {
    const gridContents = sections.map(section => {
      return {
        image: {
          asset: {
            _ref: section.image.asset._ref
          }
        },
        name: section.name.en
      };
    });
    setMenuGridItems([...gridContents]);
  }, [sections, setMenuGridItems]);

  useEffect(() => {
    setHomePage();
  }, [setHomePage]);

  return (
    <div>
      <Navbar currentPath={match.path} />
      <MenuGrid header="MENU" color="#8B542F" />
    </div>
  );
};

export default Home;

