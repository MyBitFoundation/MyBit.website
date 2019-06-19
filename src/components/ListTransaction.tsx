import React from 'react'
import styled from 'styled-components'
import { shorten } from '../utils'
import EtherscanAddress from '@components/EtherscanAddress'
import { ethers } from 'ethers'
interface TransactionProps {
  Time: number
  relativeTime: string
  from: string
  to: string
  value: string
  hash: string
  id: string
  showTransaction: Function
  fee: string
}

export default (props: TransactionProps): JSX.Element => {
  return (
    <TxCard onClick={() => props.showTransaction(props)}>
      <div className="w-50 tl">
        <div className="pb1">{props.relativeTime}</div>
        <div className="pb1">
          <span style={{ fontWeight: 700 }}>From </span>
          <EtherscanAddress shorten={true} address={props.from} />
        </div>
        <div>
          {(props.value != undefined && props.value != "0.0"
          ? parseFloat(ethers.utils.formatEther(
            props.value
          )).toFixed(3)
          : '0' ) + ' MYB'}
        </div>
      </div>
      <div className="w-50 tr">
        <div>
          <div className="pb1">
            <span style={{ fontWeight: 700 }}>Hash </span>
            <span
              style={{ color: '#1890FF' }}
              onClick={() => props.showTransaction(props)}
            >
              {shorten(props.hash)}
            </span>
          </div>
          <div className="pb1">
            <span style={{ fontWeight: 700 }}>To </span>
            <EtherscanAddress shorten={true} address={props.to} />
          </div>
          <div>
            <span style={{ fontWeight: 700 }}>Fee </span> {`0 MYB`}
          </div>
        </div>
      </div>
    </TxCard>
  )
}

const TxCard = styled.div.attrs({
  className: 'pa2 flex flex-row'
})`
cursor: pointer;
`
