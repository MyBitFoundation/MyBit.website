import React from 'react'
import EtherscanAddress from '@components/EtherscanAddress'
import { ethers } from 'ethers'
import styled from 'styled-components'
import backarrow from '@images/backarrow.svg'
import illodude from '@images/illo-dude.svg'

interface TransactionProps {
  timestamp: number
  blockNumber: number
  relativeTime: string
  from: string
  to: string
  value: string
  hash: string
  id: string
  hideTransaction: Function
  events: Array<any>
  currentBlockNumber: number
  path: string
}

export default class Transacation extends React.Component<TransactionProps> {
  componentDidMount() {
    console.log(this.props)
    if (window) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <>
        <Tx>
          <div className="pa4 flex-ns flex-row-ns items-end justify-between">
            <div className="w-70-l">
              <div>
                <TxHash>
                  {this.props.hash}{' '}
                  <Copy
                    onClick={() =>
                      navigator.clipboard.writeText(this.props.hash)
                    }
                  >{` Copy`}</Copy>
                </TxHash>
              </div>
              <Tag>Status:</Tag>
              <Item>Success</Item>
              <Tag>Block:</Tag>
              <Item>{`${this.props.blockNumber} (${this.props
                .currentBlockNumber -
                this.props.blockNumber} CONFIRMATIONS)`}</Item>
              <Tag>Time:</Tag>
              <Item>
                {this.props.relativeTime +
                  ' ' +
                  new Date(
                    this.props.events[0].timestamp * 1000
                  ).toLocaleString()}
              </Item>
              <Tag>From:</Tag>
              <div style={{ paddingBottom: '24px' }}>
                <EtherscanAddress shorten={false} address={this.props.from} />
                <Copy
                  onClick={() => navigator.clipboard.writeText(this.props.from)}
                >{` Copy`}</Copy>
              </div>
              <Tag>To:</Tag>
              <div style={{ paddingBottom: '24px' }}>
                <span className="black">
                  {this.props.events.length ? 'Contract: ' : ''}
                </span>
                <EtherscanAddress shorten={false} address={this.props.to} />
                <Copy
                  onClick={() => navigator.clipboard.writeText(this.props.to)}
                >{` Copy`}</Copy>
                {this.props.events
                  .filter(e => e.name === 'Transfer')
                  .map(e => {
                    return (
                      <>
                        <br />
                        <span className="ttu f7 pl2">Transfer</span>
                        <span> from </span>
                        <EtherscanAddress shorten={true} address={e.p0} />
                        <span> to </span>
                        <EtherscanAddress shorten={true} address={e.p1} />
                        <span>{` for ${ethers.utils.formatEther(
                          ethers.utils.parseEther(e.p2)
                        )}`}</span>
                      </>
                    )
                  })}
              </div>
              <Tag>Value: </Tag>
              <Item>
                {ethers.utils
                  .formatEther(ethers.utils.bigNumberify(this.props.value))
                  .split('.')[0] + ' MYB'}
              </Item>
              <Tag>Fee:</Tag>
              <Item>0 MYB</Item>
            </div>
            <img className="dn db-ns" src={illodude} />
          </div>
        </Tx>
        <Back onClick={this.props.hideTransaction as any}>
          <img src={backarrow} className="ph1" />
          Back To All Transactions
        </Back>
      </>
    )
  }
}

const Copy = styled.span.attrs({})`
  color: #bdbdbd;
  cursor: pointer;
`

const Tx = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  word-wrap: break-word;
`

const TxHash = styled.div.attrs({ className: 'db' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #111111;
  padding-bottom: 24px;
`

const Tag = styled.div`
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 900;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6c6c6c;
  padding-bottom: 4px;
`

const Item = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  padding-bottom: 24px;
`

const Back = styled.div.attrs({
  className: 'pt3 center tc pb7'
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1890ff;
  cursor: pointer;
`
