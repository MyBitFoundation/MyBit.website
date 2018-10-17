import React, { Component } from 'react'
import stylesheet from '../styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Header } from '../components/header/header'
import { MybitVentures } from '../components/mybitVentures/mybit-ventures'
import { HowDoesItWork } from '../components/howDoesItWork/how-does-it-work'
import { CommunityInitiatives } from '../components/communityInitiatives/community-initatives'
import { MyBitFooter } from '../components/footer/footer'

class Fund extends Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="headerWrapper">
          <div className="mainContainer">
            <Header isDark={false} />
          </div>
        </div>
        <div className="mainContainer">
          <MybitVentures />
        </div>
        <HowDoesItWork />
        <CommunityInitiatives />
        <MyBitFooter />
      </Layout>
    )
  }
}

export default Fund
