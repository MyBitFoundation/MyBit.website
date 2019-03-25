import React from 'react'
import { SCommunityIcon } from './SCommunityIcon'
import { SBlueTitle } from './SBlueTitle'
import styled from 'styled-components'

export interface AboutCardProps {
  icon: string
  title: string
  text: string
}

export class AboutCard extends React.Component<AboutCardProps> {
  render() {
    return (
      <div className='ph2 tc light-grey'>
        <SCommunityIcon src={this.props.icon} />
        <SBlueTitle>{this.props.title}</SBlueTitle>
        <SText>{this.props.text}</SText>
      </div>
    )
  }
}

export const SText = styled.span.attrs({
  className: 'light-grey f6 tc'
})`
  line-height: 30px;
`;
