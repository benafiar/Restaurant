import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Navbar, MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';

const Sweets = (props) => {
  const { allItems, menuGridItems, setMenuGridItems, sectionItems } = useContext(AppContext);

  console.log(props)

  useEffect(()=>{
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
      <MenuGrid header={"SWEETS"} menuItems={menuGridItems}/>
    </Fragment>
  );
};

export default Sweets;