import React, { Component } from 'react'
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

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="headerWrapper">
            <div className="mainContainer">
              <Header isDark={false} />
              {<LandingBanner />}
            </div>
          </div>
          <div className="countdownWrapper">
            <Countdown />
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
