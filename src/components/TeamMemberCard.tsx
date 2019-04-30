import React from 'react'
import styled from 'styled-components'

interface TeamMemberCardProps {
  art: string
  name: string
  role: string
}

export class TeamMemberCard extends React.Component<TeamMemberCardProps> {
  render() {
    return (
      <>
        <img className="w-100 center pb1"src={this.props.art} alt="headshot" />
        <div className="f5 gilroy fw9 black tc pb1">{this.props.name}</div>
        <SRole>{this.props.role}</SRole>
      </>
    )
  }
}

const SRole = styled.div.attrs({
  className: "tracked tc b"
})`
  font-family: Gilroy;
  line-height: 12px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0px 10px;

   @media(min-width: 480px){
    padding: 0px 0px;
  }
`
