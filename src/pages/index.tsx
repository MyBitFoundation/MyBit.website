import React from 'react'
import { withSiteData } from 'react-static'
import openFuture from '../../static/img/il-openfuture.svg'
import { SWrapper } from '@components/SWrapper'
import { SHeadline } from '@components/SHeadline'
import { SSubHeadline } from '@components/SSubHeadline'
import { SImg } from '@components/SImg'
import { SParagraphLead, SParagraphLeadTl } from '@components/SParagraphLead'
import { SParagraph } from '@components/SParagraph'
import { CommunityInfo } from '@components/CommunityInfo'
import { communityInfoData } from '@constants/communityInfo'
import { communityLinks } from '@constants/communityLinks'
import { CommunityLink } from '@components/CommunityLink'
import { TokenSale } from '@components/TokenSale'
import Btn from '@components/Button'
import leftperson from '@images/il-left-person.svg'
import rightperson from '@images/il-rightperson.svg'

export default withSiteData(
  class HomePage extends React.Component<{}> {
    render() {
      return (
        <SWrapper>
          <SHeadline>An Open Future, Owned By All</SHeadline>
          <SParagraphLead>
            MyBit designs products that open up the world, creating tools that
            enable freedom and wealth generation for everyone. We believe that
            closed, centrally controlled systems limit our potential as a
            society, and that truly transparent and open collaboration will
            power the future.
          </SParagraphLead>
          <SImg src={openFuture} alt="open future" />
          <div className="dn-ns">
            {' '}
            <SSubHeadline>Building Is Believing</SSubHeadline>
            <SParagraphLead>
              We are building tools to power the future of human collaboration.
            </SParagraphLead>
          </div>
          <div className="flex flex-row items-top justify-between items-end">
            <img src={leftperson} alt="person" className="order-0" />
            <img
              src={rightperson}
              alt="person"
              className="order-1 order-2-ns"
            />
            <div
              style={{ maxWidth: '600px' }}
              className="order-2 order-1-ns dn db-ns tl"
            >
              <SSubHeadline>Building Is Believing</SSubHeadline>
              <SParagraphLead>
                We are building tools to power the future of human
                collaboration.
              </SParagraphLead>
              <SParagraph>
                Our initial seed level funding round allowed us to expand the
                scope of our vision and build functional tools to power the new
                economy. Following a successful initial token distribution in
                2017 we put our heads down and began developing technology that
                enables a more open, collaborative and accessible way of
                working. You can explore our progress by visiting our{' '}
                <a
                  style={{ color: '#1890ff' }}
                  className="link no-underline underline-hover"
                  href="https://transparency.mybit.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Transparency Portal
                </a>
              </SParagraph>
            </div>
          </div>
          <div className="dn-ns">
            {' '}
            <SParagraph>
              Our initial seed level funding round allowed us to expand the
              scope of our vision and build functional tools to power the new
              economy. Following a successful initial token distribution in 2017
              we put our heads down and began developing technology that enables
              a more open, collaborative and accessible way of working. You can
              explore our progress by visiting our{' '}
              <a
                style={{ color: '#1890ff' }}
                className="link no-underline underline-hover"
                href="https://transparency.mybit.io/"
                target="_blank"
                rel="noreferrer"
              >
                Transparency Portal
              </a>
            </SParagraph>
          </div>

          <TokenSale />
          <div className="pb7" />
          <SSubHeadline>Community In Charge</SSubHeadline>
          <SParagraphLead>
            MyBit allows anyone to finance and build the blockchain-powered products
            that will revolutionise and disrupt transaction-based industries.
          </SParagraphLead>
          <div className="flex flex-column center items-top justify-between flex-row-ns pt3">
            {communityInfoData.map(e => (
              <CommunityInfo {...e} />
            ))}
          </div>

          <div className="pb6" />
          <div className="pv6" style={{ backgroundColor: '#0B3F9C' }}>
            <SParagraphLeadTl color="white">
              The MyBit Community will be fully in charge of the project by the
              end of 2019 as we transition to a fully decentralised governance
              structure. That means we will be creating one of the first
              self-governing, co-operative tech projects on the web and a
              blueprint for future DAOs. Our community will not only deploy the
              MYB token to develop and scale projects, but also stake the tokens
              to vote on major company decisions and operations.
              <div className="pt3">
                <Btn
                  text="MyBit DAO (testnet)"
                  linkTo="https://rinkeby.aragon.org/#/0x13ab94f2cb92A395D8dD73638c74d27Ae397868B/"
                  isWhite={true}
                />
              </div>
            </SParagraphLeadTl>
          </div>
          <div className="flex justify-center items-end flex-wrap pv7 ph2">
            {communityLinks.map((link, index, items) => (
              <div
                className={`${
                  index === items.length - 1 ? 'pt4 pt0-ns' : ''
                } w-50 w-33-ns`}
              >
                <CommunityLink {...link} />
              </div>
            ))}
          </div>
        </SWrapper>
      )
    }
  }
)
