import React, { useEffect, useContext, useCallback } from 'react';
import { MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';
import gridHelper from '../../helpers/gridHelper';

const Beef = ({ match }) => {
  const { allItems, setMenuGridItems, sections } = useContext(AppContext);

  const setBeefPage = useCallback(() => {
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
    setBeefPage();
  }, [setBeefPage]);

  return (
    <div>
      <Navbar currentPath={match.path} />
      <MenuGrid header="FLAME GRILLED BEEF" />
    </div>
  );
};

export default Beef;
