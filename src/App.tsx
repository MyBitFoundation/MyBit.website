import React from 'react'
import { Root, Routes } from 'react-static'
import '../static/css/app.css'
import '../static/css/tachyons-mybit.css'
import Foooter from '@containers/Footer'
import BannerDao from '@components/BannerDao'

function App() {
  return (
    <Root>
      <BannerDao />
      
        <main>
          <Routes />
        </main>

        <div
          style={{ borderColor: '#D9D9D9' }}
          className="bb mh2 border-1 dn-ns"
        />
        <Foooter />

    </Root>
  )
}

export default App
