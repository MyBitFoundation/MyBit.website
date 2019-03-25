import React from 'react'
import { SCommunityIcon } from './SCommunityIcon'
import { SBlueTitle } from '@components/SBlueTitle'
import styled from 'styled-components'
import { Link } from '@reach/router'
export interface CommunityInfoProps {
  icon: string
  title: string
  textStart: string
  blueWord: string
  link: string
  textEnd: string
}

export class CommunityInfo extends React.Component<CommunityInfoProps> {
  render() {
    return (
      <div className="ph2 tc light-grey mw6">
        <SCommunityIcon src={this.props.icon} />
        <SBlueTitle>{this.props.title}</SBlueTitle>
        <SText>{this.props.textStart}</SText>
        {this.props.link.substr(0, 4) === 'http' ? (
          <a
            target="_blank"
            rel="noreferrer"
            className="link no-underline underline-hover"
            style={{ color: '#1890ff'}}
            href={this.props.link}
          >
            {this.props.blueWord}
          </a>
        ) : (
          <Link className="link no-underline underline-hover" style={{ color: '#1890ff'}} to={this.props.link}>
            {this.props.blueWord}
          </Link>
        )}
        <SText>{this.props.textEnd}</SText>
      </div>
    )
  }
}

export const SText = styled.span.attrs({
  className: 'light-grey f5 tc'
})`
  line-height: 30px;
`
