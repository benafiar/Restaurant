import React, {useEffect, useContext} from 'react';
import { MenuGrid } from '../../components'
import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { setMenuGridItems, sections } = useContext(AppContext);

  console.log(sections)

  const gridContents = sections.map(section => {
    return {
      image : {
        asset: {
          _ref: section.image.asset._ref
        }
      },
      name: section.name.en
    };
  });

  console.log(gridContents, "GridContents")

  useEffect(()=>{
    setMenuGridItems([...gridContents]);
  }, [])

  return(
    <div>
      <h1>Home</h1>
      <MenuGrid />
    </div>
  )
};

export default Home;