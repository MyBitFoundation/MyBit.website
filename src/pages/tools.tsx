import React from 'react'
import { withSiteData } from 'react-static'
import { SWrapper } from '@components/SWrapper'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
// import { SSubHeadline } from '@components/SSubHeadline'
import styled from 'styled-components'
import { Category, Filter, filterNames } from '@constants/tools'
import ToolsPanel from '@containers/ToolsPanel'
export default withSiteData(
  class ToolsPage extends React.Component<
    {},
    { filter: Filter; category: Category }
  > {
    state = {
      filter: 1,
      category: 0
    }
    render() {
      return (
        <SWrapper>
          <SHeadline>Tools & Dapps</SHeadline>
          <SParagraphLead>
            In an industry wrought with hype, building is believing. MyBit
            develops products that enable the decentralised economy and powers
            community projects that simplify frictionless value exchange. Our
            projects are funded, developed and approved by the community with
            full transparency and collective consensus every step of the way.
          </SParagraphLead>
          <div />
          <SWrapperFilter>
            {[0, 1, 2, 3].map(el => (
              <div className="pl1 pb1">
                <SFilter
                  onClick={() => this.setState({ filter: el })}
                  active={this.state.filter === el}
                >
                  {filterNames.get(el)}
                </SFilter>
              </div>
            ))}
          </SWrapperFilter>
          <div className="dn-ns pa2">
            <SCategory
              onClick={() => {
                this.setState({ category: Category.CORE })
              }}
              active={this.state.category === Category.CORE}
              index={0}
            >
              CORE PRODUCTS
            </SCategory>
            <SCategory
              onClick={() => this.setState({ category: Category.TOOLS })}
              active={this.state.category === Category.TOOLS}
              index={1}
            >
              TOOLS
            </SCategory>
            <SCategory
              onClick={() => this.setState({ category: Category.DAPPS })}
              active={this.state.category === Category.DAPPS}
              index={2}
            >
              Community dApps
            </SCategory>
          </div>
          <div className="dn db-ns flex-ns flex-row-ns">
            <ToolsPanel category={Category.CORE} filter={this.state.filter} />
            <ToolsPanel category={Category.TOOLS} filter={this.state.filter} />
            <ToolsPanel category={Category.DAPPS} filter={this.state.filter} />
          </div>
          <div className={'dn-ns'}>
            <ToolsPanel
              category={this.state.category}
              filter={this.state.filter}
            />
          </div>
          <div className="pb7" />
        </SWrapper>
      )
    }
  }
)

const SWrapperFilter = styled.div.attrs({
  className: 'flex flex-row center justify-between justify-center-ns pa2'
})`
  @media screen and (max-width: 30em) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
  white-space: nowrap;
`

const SFilter = styled.div.attrs({
  className: `tracked gilroy b f7 dtc tc v-mid ph2 db ttu shover`
})`
  border: 2px solid
    ${(props: { active: boolean }) => (props.active ? '#1890FF;' : '#BDBDBD')};
  box-sizing: border-box;
  border-radius: 16px;
  height: 32px;
  cursor: pointer;
`

interface SCategoryProps {
  active: boolean
  index: number
  onClick: Function
}
const SCategory = styled.div.attrs({
  className: 'tracked gilroy b f7 dtc tc v-mid pv1 ph2 dib ttu'
})`
border: 1px solid;
border-top-left-radius: ${(props: SCategoryProps) =>
  props.index === 0 ? '4px' : '0px'}
border-bottom-left-radius: ${(props: SCategoryProps) =>
  props.index === 0 ? '4px' : '0px'}
border-top-right-radius: ${(props: SCategoryProps) =>
  props.index === 2 ? '4px' : '0px'}
border-bottom-right-radius: ${(props: SCategoryProps) =>
  props.index === 2 ? '4px' : '0px'}
border-left: ${(props: SCategoryProps) => (props.index === 1 ? '1px' : '0px')}
border-right: ${(props: SCategoryProps) => (props.index === 1 ? '1px' : '0px')};
color: ${(props: SCategoryProps) =>
  props.active ? '#1890FF' : '#D9D9D9'};
`
