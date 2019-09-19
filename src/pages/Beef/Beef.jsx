import React, {useEffect, useContext} from 'react';
import { MenuGrid } from '../../components'
import { AppContext } from '../../context/AppContext';
import gridHelper from '../../helpers/gridHelper'

const Beef = (props) => {
  const { allItems, setMenuGridItems, sections } = useContext(AppContext);

  const gridContents = sections.map(section => {
    return {
      gridItems: section.options.map(option => option._ref)
    };
  });
  console.log(gridContents, "GRID CONTENTS")
  useEffect(()=>{
    
    const currentSelection = [...allItems.flat()].filter(item => {
      return gridContents[gridHelper(props.match.path)].gridItems.includes(item._id);
    });
    console.log(currentSelection, "CURRENT SELECTION!")
    setMenuGridItems([...currentSelection]);
  }, [])

  return(
    <div>
      <h1>BEEF</h1>
      <MenuGrid />
    </div>
  )
};

export default Beef;
