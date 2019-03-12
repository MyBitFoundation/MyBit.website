import React from 'react'
import { withSiteData } from 'react-static'
import { SWrapper } from '@components/SWrapper'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import { SSubHeadline } from '@components/SSubHeadline'
import { aboutCards, ecosystem, team } from '@constants/about'
import { AboutCard } from '@components/AboutCard'
import { EcosystemCard } from '@components/EcosystemCard'
import { TeamMemberCard } from '@components/TeamMemberCard'
import ecosystemImage from '../../static/img/ecosystem.svg'
export default withSiteData(
  class AboutPage extends React.Component<{}> {
    render() {
      return (
        <SWrapper>
          <SHeadline>Company</SHeadline>
          <SParagraphLead>
            MyBit was started by a group of industry veterans frustrated by the
            limitations of today’s financial systems. In a global economy where
            trust is invaluable and hard to come by, third party providers like
            lawyers, managers and deal brokers have created inefficiencies while
            taking large percentages as profits.
          </SParagraphLead>
          <div className="pt6" />
          <SSubHeadline>Our Vision</SSubHeadline>
          <div className="pb7 flex-ns flex-row-ns justify-between">
            {aboutCards.map((e, i, l) => (
              <div
                className={`${i === l.length - 1 ? '' : 'pb2'} ph1-ns w-40-ns`}
              >
                <AboutCard {...e} />
              </div>
            ))}
          </div>
          <SSubHeadline>The Ecosystem</SSubHeadline>
          <SParagraphLead>
            The MyBit Ecosystem consists of four components; Our Community, Our
            Technology, Our Governance model and the MyBit Token.
          </SParagraphLead>
          <div id="token" className="pt6 pb7 dn-ns">
            <img className='pb5' src={ecosystemImage} />
            {ecosystem.map((e, i, l) => (
              <div className={`${i === l.length - 1 ? '' : 'pb4'}`}>
                <EcosystemCard {...e} className='tc' />
              </div>
            ))}
          </div>
          <div className="pt6 pb7 dn db-ns">
            <EcosystemCard {...ecosystem[0]} className="tc" />
            <div className="flex-ns flex-row-ns items-center justify-center">
              <EcosystemCard {...ecosystem[1]} className="tr" />
              <img alt='illustration' src={ecosystemImage} />
              <EcosystemCard {...ecosystem[2]} className="tl" />
            </div>
            <EcosystemCard {...ecosystem[3]} className="tc" />
          </div>
          <div>
            <SSubHeadline>Meet The Team</SSubHeadline>
            <div className="flex flex-row flex-wrap pb7">
              {team.map((e, i, l) => (
                <div
                  className={`${
                    i === l.length - 1 || i === l.length - 2 ? '' : 'pb4'
                  } w-50 w-33-ns ph6-ns`}
                >
                  <TeamMemberCard {...e} />
                </div>
              ))}
            </div>
          </div>
        </SWrapper>
      )
    }
  }
)