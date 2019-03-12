import React from 'react'
import { Category, Filter } from '@constants/tools'
import styled from 'styled-components'
export interface ToolProps {
  title: string
  category: Category
  filter: Filter
  text: string
  link: string
  icon: string
}

export class Tool extends React.Component<ToolProps, {}> {
  constructor(props: ToolProps) {
    super(props)
  }

  render() {
    return (
      <a target="_blank"  rel="noreferrer" className='link' href={this.props.link}>
      <table onClick={() => 'click'} className="w-100 pv2">
        <thead>
          <tr>
            <th style={{ width: '24px' }}>
              <img
                style={{ width: '24px' }}
                className="tl db"
                alt="icon"
                src={this.props.icon}
              />
            </th>
            <STitle>{this.props.title}</STitle>
          </tr>
        </thead>
        <tbody>
          <td />
          <SText>{this.props.text}</SText>
          {this.props.link === '' && <SComingSoon>Coming Soon</SComingSoon>}
        </tbody>
      </table>
      </a>
    )
  }
}

const SComingSoon = styled.div.attrs({className: 'pt1'})`font-family: Gilroy;
font-size: 12px;
line-height: 12px;
letter-spacing: 1px;
text-transform: uppercase;
font-weight: 700;
color: #0B3F9C;`

const STitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: #111111;
`
const SText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 14px;

  color: #6c6c6c;
`
