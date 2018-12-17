import React from 'react'
import { ROADMAP_EVENTS } from '../components/constants/roadmap'
import { default as Layout } from '../components/layout/layout'
import { Header } from '../components/header/header'
import { AboutUsSection } from '../components/aboutUs/about-us'
import { TwoColumnsCard } from '../components/twoColumnsCard/two-columns-card'
import { TeamSection } from '../components/teamSection/team-section'
import { JoinSection } from '../components/joinSection/join-section'
import { MyBitFooter } from '../components/footer/footer'
import { DEV_TOOLS_DATA } from '../components/constants/dev-tools-and-white-label'
import { WeWorkWith } from '../components/weWorkWith/WeWorkWith'
import { Roadmap } from '../components/roadmap/roadmap'
import { MyBitTokenSection } from '../components/myBitTokenSection/mybit-token-section'
import stylesheet from 'styles/main.scss'

export default class Index extends React.Component {
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
          <AboutUsSection />
        </div>
        <TwoColumnsCard columnsData={DEV_TOOLS_DATA} />
        <TeamSection />
        <WeWorkWith />
        <JoinSection />
        <Roadmap events={ROADMAP_EVENTS} />
        <MyBitTokenSection />
        <MyBitFooter />
      </Layout>
    )
  }
}
