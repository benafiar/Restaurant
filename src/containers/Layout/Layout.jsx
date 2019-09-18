import React from 'react'
import {Navbar, MenuGrid} from '../../components'
import { AppContextProvider } from '../../context/AppContext'

const Layout = () => {
  return(
    <div>
      <h1>Hello World - Layout</h1>
      <AppContextProvider>
        <Navbar />
        <MenuGrid />
      </AppContextProvider>
    </div>
  )
}

export default Layout