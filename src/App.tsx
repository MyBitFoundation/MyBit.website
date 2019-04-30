import React from 'react'
import { Root, Routes } from 'react-static'
import '../static/css/app.css'
import '../static/css/tachyons-mybit.css'
import Menu from '@containers/Menu'
import Foooter from '@containers/Footer'
import { menuData } from '@constants/menus'
import BannerDao from '@components/BannerDao'

function App() {
  return (
    <Root>
      <BannerDao />
      <nav>
        <Menu items={menuData} />
      </nav>
      <div className="center" style={{ maxWidth: 1128 }}>
        <main>
          <Routes />
        </main>

        <div
          style={{ borderColor: '#D9D9D9' }}
          className="bb mh2 border-1 dn-ns"
        />
        <Foooter />
      </div>
    </Root>
  )
}

export default App
