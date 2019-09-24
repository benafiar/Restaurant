import React, { useEffect, useContext, useCallback } from 'react';
import { MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';
import { PlaceHolder } from '../../components';

const Home = () => {
  const { setMenuGridItems, sections, loaded } = useContext(AppContext);

  const setHomePage = useCallback(() => {
    const gridContents = sections.map(section => {
      return {
        image: {
          asset: {
            _ref: section.image.asset._ref
          }
        },
        name: {
          en: section.name.en
        }
      };
    });
    setMenuGridItems([...gridContents]);
  }, [sections, setMenuGridItems]);

  useEffect(() => {
    setHomePage();
  }, [setHomePage]);

  return (
    <div>
      {loaded ? <MenuGrid header="MENU" color="#8B542F" /> : <PlaceHolder />}
    </div>
  );
};

export default Home;
