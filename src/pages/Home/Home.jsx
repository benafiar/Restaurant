import React, {useEffect, useContext} from 'react';
import { MenuGrid } from '../../components'
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';

const Home = ({ match }) => {
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
      <Navbar currentPath={match.path} />
      <MenuGrid header="MENU" />
    </div>
  )
};

export default Home;