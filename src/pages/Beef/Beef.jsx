import React, { Fragment, useEffect, useContext } from 'react';
import { Navbar, MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';

const Beef = (props) => {
  const { allItems, menuGridItems, setMenuGridItems, sectionItems } = useContext(AppContext);
console.log(props.match.path)
  useEffect(()=>{
    console.log(allItems)
    const currentSelection = [...allItems.flat()].filter(item=>{
      return sectionItems.includes(item._id)
    })
    console.log(currentSelection, "currentselection")
    setMenuGridItems([...currentSelection])
  }, [])

  console.log(menuGridItems)

  return (
    <Fragment>
      <Navbar />
      <MenuGrid header={"FLAME GRILLED BEEF"} menuItems={menuGridItems}/>
    </Fragment>
  );
};

export default Beef;
