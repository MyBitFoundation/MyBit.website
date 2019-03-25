import React from 'react'
import { SBlueTitle } from './SBlueTitle'
import styled from 'styled-components'

export interface EcosystemCardProps {
  title: string
  text: string
  className?: string
}

export class EcosystemCard extends React.Component<EcosystemCardProps> {
  render() {
    return (
      <div className={`ph2 light-grey w-40-ns center-ns ${this.props.className}`}>
        <div className='dn-ns pb1'><SBlueTitle>{this.props.title}</SBlueTitle></div>
        <SText>{this.props.text}</SText>
      </div>
    )
  }
}

export const SText = styled.span.attrs({
  className: 'light-grey f5'
})`
  line-height: 30px;
`;
