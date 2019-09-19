import React, { useEffect, useContext, useCallback } from 'react';
import { MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';
import gridHelper from '../../helpers/gridHelper';

const SpecialOffers = ({ match }) => {
  const { allItems, setMenuGridItems, sections } = useContext(AppContext);

  const setSpecialOffersPage = useCallback(() => {
    const gridContents = sections.map(section => {
      return {
        gridItems: section.options.map(option => option._ref)
      };
    });
    const currentSelection = [...allItems.flat()].filter(item => {
      return gridContents[gridHelper(match.path)].gridItems.includes(item._id);
    });
    setMenuGridItems([...currentSelection]);
  }, [allItems, match.path, sections, setMenuGridItems]);

  useEffect(() => {
    setSpecialOffersPage();
  }, [setSpecialOffersPage]);

  return (
    <div>
      <Navbar currentPath={match.path} />
      <MenuGrid header="SPECIAL OFFERS" color="#AB1A2D" />
    </div>
  );
};

export default SpecialOffers;
