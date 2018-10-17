import React, { Component } from 'react'
import stylesheet from '../styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Header } from '../components/header/header'
import { HowToUse } from '../components/howToUse/how-to-use'
import { MyBitGraphic } from '../components/myBitGraphic/mybit-graphic'
import { Exchanges } from '../components/exchanges/exchanges'
import { TokenSale } from '../components/tokenSale/tokenSale'
import { MyBitFooter } from '../components/footer/footer'

const myBitGraphicImageUrl = '../static/assets/TokenPower.svg'
const howToUseImageUrl = '../static/assets/Utilitytoken.svg'

class Token extends Component {
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
          <MyBitGraphic graphic={myBitGraphicImageUrl} />
        </div>
        <HowToUse graphic={howToUseImageUrl} />
        <Exchanges />
        <TokenSale />
        <MyBitFooter />
      </Layout>
    )
  }
}

export default Token
