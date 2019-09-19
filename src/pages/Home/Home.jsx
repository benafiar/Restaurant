import React, { Fragment, useEffect, useContext } from 'react';
import { Navbar, MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { allItems, menuGridItems, setMenuGridItems, sections} = useContext(AppContext);

  useEffect(()=>{
    const navContents = sections.map(section => {
      return {
        id: section._id,
        carouselImage: section.carouselImage.asset._ref,
        name: section.name.en,
        sectionItems: section.options.map(option => option._ref),
        image: section.image.asset._ref
      };
    });
    setMenuGridItems([...navContents])
  }, [])
  
  console.log(menuGridItems, "Menu")

  return (
    <Fragment>
      <Navbar />
      <MenuGrid header={"MENU"} menuItems={menuGridItems} />
    </Fragment>
  );
};

export default Home;
