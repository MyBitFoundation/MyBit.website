import React from 'react'
import { withSiteData } from 'react-static'
import { SWrapper } from '@components/SWrapper'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import { SSubHeadline } from '@components/SSubHeadline'
import { ventures } from '@constants/ventures'
import { VentureCard } from '@components/VentureCard'
import Btn from '@components/Button'
import ddfScreen from '../../static/img/ddf-screen.svg'

export default withSiteData(
  class HomePage extends React.Component<{}> {
    render() {
      return (
        <SWrapper>
          <SHeadline>MyBit Ventures</SHeadline>
          <SParagraphLead>
            We believe in a future where new products are developed collectively
            by a group of passionate, like-minded contributors, self-governed
            and scaled organically without the need for a big corporate
            structure.
          </SParagraphLead>
          <div className="pt6" />
          <SSubHeadline>
            MyBit Ventures is a fund set up to realise that vision
          </SSubHeadline>
          <div className="pt6 pb7 flex-ns flex-row-ns">
          {ventures.map((e, i, l) => (
            <div className={`${i === l.length - 1 ? '' : 'pb3-ns'} w-33-ns`}>
              <VentureCard {...e} />
            </div>
          ))}
          </div>
          <SSubHeadline>Task.Market</SSubHeadline>
          <SParagraphLead>
            Funded projects will have access to the Task.Market, a microtask
            fund that will allow developers to accelerate and scale by tapping
            into a talent pool of contributors across development, marketing,
            design, security, testing and other operations.
          </SParagraphLead>
          <div style={{maxWidth: '320px'}} className="ph5 center">
            <Btn
              text="learn more"
              linkTo="https://task.market"
              isWhite={false}
            />
          </div>
          <img className="pb7 center w-100" src={ddfScreen}/>
        </SWrapper>
      )
    }
  }
)
