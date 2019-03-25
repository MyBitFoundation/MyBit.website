import React from 'react'
import styled from 'styled-components'
import { SParagraphLead } from './SParagraphLead'
import { SBlueTitle } from './SBlueTitle'
interface VentureCardProps {
  icon: string
  title: string
  text: string
}

export class VentureCard extends React.Component<VentureCardProps> {
  render() {
    return (
      <div>
        <SIcon src={this.props.icon} />
        <div className='pt2 pb1'><SBlueTitle>{this.props.title}</SBlueTitle></div>
        <SParagraphLead>{this.props.text}</SParagraphLead>
      </div>
    )
  }
}

const SIcon = styled.img.attrs({
  className: 'center db'
})``
