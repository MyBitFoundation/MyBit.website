import React from 'react'
import styled from 'styled-components'

interface CommunityLinkProps {
  icon: string
  title: string
  buttonText: string
  buttonLink: string
}

export class CommunityLink extends React.Component<CommunityLinkProps> {
  render() {
    return (
      <div>
        <SIcon alt='icon' src={this.props.icon} />
        <SText>{this.props.title}</SText>
        <Slink href={this.props.buttonLink} target="_blank" rel="noreferrer">
          {this.props.buttonText}
        </Slink>
      </div>
    )
  }
}

const Slink = styled.a.attrs({
  className:
    'bhover no-underline tc bhover no-underline tc tracked b center flex justify-center items-center'
})`
  color: #1890ff;
  font-family: Gilroy;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 48px;
  max-width: 50%;
`

const SIcon = styled.img.attrs({
  className: 'center db'
})`
  width: 249px;
  height: 146px;
`
const SText = styled.div.attrs({
  className: 'pb2 black center'
})`
  font-family: Gilroy;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  font-weight: 900;
  max-width: 131px;
`
