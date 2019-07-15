import React from 'react'
import styled from 'styled-components'

interface ExchangeLinkProps {
  url: string
  icon: string
}

export class ExchangeLink extends React.Component<ExchangeLinkProps> {
  render() {
    return (
      <div>
        <Slink href={this.props.url} target="_blank" rel="noreferrer">
          <SIcon alt='icon' src={this.props.icon} />
        </Slink>
      </div>
    )
  }
}

const Slink = styled.a.attrs({
  className:
    ' no-underline tc no-underline tc tracked b center flex justify-center items-center'
})``

const SIcon = styled.img.attrs({
  className: 'center db'
})`
  width: 149px;
`
