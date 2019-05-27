import styled from 'styled-components'
import React from 'react'
export default (props: {
  address: string
  shorten?: boolean
  notEtherscan?: boolean
}): JSX.Element => {
  return props.notEtherscan ? (
    <AddressB>
      {dApps.has(props.address.toLowerCase())
        ? dApps.get(props.address.toLowerCase())
        : props.shorten
        ? shorten(props.address)
        : props.address}
    </AddressB>
  ) : (
    <Address href={`https://etherscan.io/address/${props.address}`}>
      {dApps.has(props.address.toLowerCase())
        ? dApps.get(props.address.toLowerCase())
        : props.shorten
        ? shorten(props.address)
        : props.address}
    </Address>
  )
}

const shorten = (text: string) => {
  return `${text.substr(0, 5)}...${text.substr(text.length - 5, text.length)}`
}

const Address = styled.a.attrs({ className: 'no-underline' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1890ff;
`
const AddressB = styled.div.attrs({ className: 'no-underline' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1890ff;
`

const dApps = new Map([
  ['0xfe03084c34b2dc3a171f9a738f4e478707666f0f', 'Trust'],
  ['0xc7e7790fc0c81a2d880b1e119ba0921881f0cde', 'DAO']
])
