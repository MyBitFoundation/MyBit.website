import React, { Component } from 'react'
import stylesheet from '../styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Header } from '../components/header/header'
import { MyBitApplications } from '../components/myBitAplications/my-bit-applications'
import { WAYS_TO_CONTRIBUTE } from '../components/constants/ways-to-contribute'
import { TwoColumnsCard } from '../components/twoColumnsCard/two-columns-card'
import { GetFunding } from '../components/getFunding/get-funding'
import { MyBitFooter } from '../components/footer/footer'

class Application extends Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="headerWrapper">
          <div className="mainContainer">
            <Header isDark={false} />
          </div>
        </div>
        <MyBitApplications page="applications" />
        <TwoColumnsCard columnsData={WAYS_TO_CONTRIBUTE} />
        <GetFunding />
        <MyBitFooter />
      </Layout>
    )
  }
}

export default Application
