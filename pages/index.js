import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import stylesheet from '../styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Header } from '../components/header/header'
import { LandingBanner } from '../components/landingBanner/landing-banner'
import { Countdown } from '../components/Countdown/countdown'
import { DevelopersCards } from '../components/developersCards/developers-cards'
import { TeamCards } from '../components/teamCards/team-cards'
import { MyBitApplications } from '../components/myBitAplications/my-bit-applications'
import { JoinSection } from '../components/joinSection/join-section'
import { NewsEventsSection } from '../components/newsEventsSection/news-events-section'
import { UpdateSection } from '../components/updateSection/update-section'
import { MyBitFooter } from '../components/footer/footer'
import { SliderMediaList } from '../components/slider'
import Banner from '../components/banner'
import {
  getSecondsUntilNextPeriod,
  MybitTokenSaleAPIEndpoint
} from '../components/constants'

class HomePage extends Component {
  static async getInitialProps({ req, query }) {
    if (req) {
      const response = await fetch(`${MybitTokenSaleAPIEndpoint}/home`)
      const jsonResponse = await response.json()

      return {
        ...jsonResponse
      }
    }

    return null
  }

  state = {
    ...this.props
  }

  async pullDetailsFromServer() {
    const response = await fetch(`${MybitTokenSaleAPIEndpoint}/home`)
    const jsonResponse = await response.json()

    this.setState({
      currentPeriodTotal: jsonResponse.currentPeriodTotal,
      currentDay: jsonResponse.currentDayServer,
      exchangeRate: jsonResponse.exchangeRate
    })
  }

  componentDidMount() {
    this.intervalPullFromServer = setInterval(
      this.pullDetailsFromServer.bind(this),
      60000
    )
    if (this.props.currentDayServer) {
      const secondsUntilNextPeriod = getSecondsUntilNextPeriod(
        this.props.timestampStartTokenSale
      )
      this.timeoutNextPeriod = setTimeout(
        this.updateCurrentDay,
        secondsUntilNextPeriod * 1000
      )
    } else if (this.props.timestampStartTokenSale) {
      const differenceToStart =
        this.props.timestampStartTokenSale - Math.floor(Date.now() / 1000)
      setTimeout(() => {
        this.pullDetailsFromServer()
      }, differenceToStart * 1000)
    }
  }

  updateCurrentDay() {
    this.setState({
      currentDay: this.state.currentDay + 1
    })
    this.setTimeOut(this.updateCurrentDay, 86400000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalPullFromServer)
  }

  render() {
    const { currentDayServer } = this.props

    const { currentDay } = this.state

    return (
      <Layout>
        <div className="LandingPage">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="headerWrapper">
            <div className="mainContainer">
              <Header isDark={false} />
              {<LandingBanner />}
            </div>
          </div>
          <div className="countdownWrapper">
            <div className="mainContainer form-wrapper">
              <Banner
                {...this.props}
                {...this.state}
                currentPeriod={currentDay ? currentDay : currentDayServer}
              />
            </div>
          </div>
          <DevelopersCards />
          <TeamCards />
          <MyBitApplications />
          <JoinSection />
          <NewsEventsSection />
          <UpdateSection />
          <SliderMediaList type="chevron" />
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}

export default HomePage
