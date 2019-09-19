import React, { useEffect, useContext, useCallback } from 'react';
import { MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';
import gridHelper from '../../helpers/gridHelper';

const PageView = ({ match, header, color }) => {
  const { allItems, setMenuGridItems, sections } = useContext(AppContext);

  const setPage = useCallback(() => {
    const gridContents = sections.map(section => {
      return {
        gridItems: section.options.map(option => option._ref)
      };
    });
    const currentSelection = [...allItems.flat()].filter(item => {
      return gridContents[gridHelper(match)].gridItems.includes(item._id);
    });
    setMenuGridItems([...currentSelection]);
  }, [allItems, match, sections, setMenuGridItems]);

  useEffect(() => {
    setPage();
  }, [setPage]);

  return (
    <div>
      <Navbar currentPath={match} />
      <MenuGrid header={header} color={color} />
    </div>
  );
};

export default PageView;