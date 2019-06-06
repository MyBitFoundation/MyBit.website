import { Radio } from 'antd'
import { ethers } from 'ethers'
import React, { ReactText } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
//import { ParamType } from 'ethers/utils'
import { MyBitToken } from 'types/contracts/MyBitToken'

interface TrackerState {
  BurnLogs: Array<any>
  TransferLogs: Array<any>
  LockingLogs: Array<any>
  timePeriod: Seconds
  lockingLine: Array<any>
  burnLine: Array<any>
  showBurnt: boolean
  showLocked: boolean
  showTotalSupply: boolean
  totalSupply: number
}
const lockAddresses = [
  '0xd9d2b28e09921a38ad7ab1b4138357408bda8ebd',
  '0xcca36039cfdd0753d3aa9f1b4bf35b606c8ed971',
  '0xfd1e4b568bb3bcf706b0bac5960d4b91bacff96f',
  '0x7389c003988802a713af73e82777b1c702077c6f',
  '0x7dc8a6e706da7c4a77d3710f7b7e621ee0074dc3',
  '0xc7e7790fc0c81a2d880b1e119ba0921881f0cdef'
]
enum Seconds {
  DAY = 86400,
  WEEK = 604800,
  MONTH = 2600000,
  YEAR = 31536000
}
/*
const Topics: {
  [topic: string]: string
} = {
  Approval:
    '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
  LogBurn: '0x38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581',
  Transfer: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
}
*/
const ToggleText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
`

export default class Tracker extends React.Component<
  { contract: MyBitToken; blockNumber: number; data: any },
  TrackerState
> {
  contract: MyBitToken
  state: TrackerState = {
    BurnLogs: [],
    TransferLogs: [],
    LockingLogs: [],
    lockingLine: [],
    burnLine: [],
    timePeriod: Seconds.MONTH,
    showBurnt: true,
    showLocked: true,
    showTotalSupply: false,
    totalSupply: 0
  }
  ToggleTotalSupply = (): JSX.Element => {
    return (
      <div
        style={this.state.showTotalSupply ? {} : { opacity: 0.2 }}
        onClick={() => {
          this.setState({
            showTotalSupply: !this.state.showTotalSupply
          })
        }}
        className="flex flex-row items-center"
      >
        <div className="pr1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#0B3F9C" />
          </svg>
        </div>
        <ToggleText>{` Total Supply (${this.state.totalSupply.toLocaleString(
          undefined,
          { maximumFractionDigits: 3 }
        )} MYB)`}</ToggleText>
      </div>
    )
  }
  ToggleLocked = (): JSX.Element => {
    return (
      <div
        style={this.state.showLocked ? {} : { opacity: 0.2 }}
        onClick={() => {
          this.setState({
            showLocked: !this.state.showLocked
          })
        }}
        className="flex flex-row items-center"
      >
        <div className="pr1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="#1890FF" />
          </svg>
        </div>
        <ToggleText>{` Locked (${
          this.state.lockingLine.length
            ? (
                100 /
                (this.state.totalSupply /
                  this.state.lockingLine[this.state.lockingLine.length - 1].y)
              ).toLocaleString(undefined, { maximumFractionDigits: 3 })
            : 0
        }%, ${
          this.state.lockingLine.length
            ? this.state.lockingLine[
                this.state.lockingLine.length - 1
              ].y.toLocaleString(undefined, { maximumFractionDigits: 3 })
            : '0'
        } MYB)`}</ToggleText>
      </div>
    )
  }
  ToggleBurnt = (): JSX.Element => {
    return (
      <div
        style={this.state.showBurnt ? {} : { opacity: 0.2 }}
        onClick={() => {
          this.setState({
            showBurnt: !this.state.showBurnt
          })
        }}
        className="flex flex-row items-center"
      >
        <svg
          className="pr1"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#3CBCF7" />
        </svg>

        <ToggleText>{` Burnt (${
          this.state.burnLine.length
            ? (
                100 /
                (this.state.totalSupply /
                  this.state.burnLine[this.state.burnLine.length - 1].y)
              ).toLocaleString(undefined, { maximumFractionDigits: 3 })
            : 0
        }%, ${
          this.state.burnLine.length
            ? this.state.burnLine[
                this.state.burnLine.length - 1
              ].y.toLocaleString(undefined, { maximumFractionDigits: 3 })
            : '0'
        } MYB)`}</ToggleText>
      </div>
    )
  }
  constructor(props: any) {
    super(props)
    this.contract = this.props.contract
  }

  componentDidMount = async () => {
    const data = this.props.data
    const BurnLogs = data.filter(
      e =>
        e.p1 === '0x0000000000000000000000000000000000000000' &&
        e.name === 'Transfer'
    )
    const LockingLogs = data.filter(
      e =>
        e.p1 != '0x0000000000000000000000000000000000000000' &&
        e.name === 'Transfer'
    )
    this.setState({ BurnLogs, LockingLogs })
    const totalSupply = parseFloat(
      ethers.utils.formatEther(await this.contract.totalSupply())
    )
    this.setState({ totalSupply })
    console.log(this.state)
    this.composeChart()
  }

  composeChart = async () => {
    let lockTotal = ethers.utils.bigNumberify(0)
    let lockingLine = this.state.LockingLogs.map((log: any) => {
      let value = ethers.utils.parseEther(log.p2)
      if (lockAddresses.findIndex(e => e == log.p0.toLowerCase()) != -1) {
        value = ethers.utils.bigNumberify(0).sub(value)
      }
      lockTotal = lockTotal.add(value)
      return {
        x: log.timestamp,
        y: parseFloat(ethers.utils.formatUnits(lockTotal, 'ether'))
      }
    })
    let burnTotal = 0
    let burnLine = this.state.BurnLogs.map((log: any) => {
      burnTotal =
        burnTotal +
        parseFloat(
          ethers.utils.formatUnits(ethers.utils.parseEther(log.p2), 'ether')
        )
      return { x: log.timestamp, y: burnTotal }
    })
    this.setState({
      lockingLine,
      burnLine
    })
  }

  handleSizeChange = (e: any) => {
    this.setState({ timePeriod: e.target.value })
  }

  getMin = () => {
    let l = []

    if (this.state.showLocked) l.concat(...this.state.lockingLine)
    if (this.state.showBurnt) l.concat(...this.state.burnLine)
    const p = l.filter(e => e.x > Date.now() / 1000 - this.state.timePeriod)
    return p.length > 0 ? p.sort((a, b) => a.y - b.y)[0].y : 0
  }

  getMax = () => {
    let l = []

    if (this.state.showLocked) l.push(...this.state.lockingLine)
    if (this.state.showBurnt) l.push(...this.state.burnLine)
    if (this.state.showTotalSupply)
      l.push({ x: Date.now() / 1000, y: this.state.totalSupply })
    const p = l.filter(e => e.x > Date.now() / 1000 - this.state.timePeriod)
    return p.length > 0 ? p.sort((a, b) => b.y - a.y)[0].y : 100000
  }

  render() {
    const { timePeriod } = this.state
    const Locked: any = {
      label: 'Locked',
      data: this.state.lockingLine.map((el, i) => {
        return {
          y: el.y,
          x: i == this.state.lockingLine.length - 1 ? Date.now() / 1000 : el.x
        }
      }),
      fill: false,
      spanGaps: true,
      lineTension: 0,
      backgroundColor: '#1890FF',
      borderColor: '#1890FF',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'bevel',
      pointRadius: 0,
      pointHitRadius: 18
    }
    const Burnt: any = {
      label: 'Burnt',
      data: this.state.burnLine.map((el, i) => {
        return {
          y: el.y,
          x: i == this.state.burnLine.length - 1 ? Date.now() / 1000 : el.x
        }
      }),
      fill: false,
      lineTension: 0,
      backgroundColor: '#3CBCF7',
      borderColor: '#3CBCF7',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'bevel',
      pointRadius: 0,
      pointHitRadius: 18
    }
    const TotalSupply: any = {
      label: 'TotalSupply',
      data: this.state.burnLine.map((el, i) => {
        return {
          y: 180000000 - el.y,
          x:
            i == this.state.burnLine.length - 1
              ? Date.now() / 1000
              : i == 0
              ? Date.now() / 1000 - this.state.timePeriod
              : el.x
        }
      }),
      fill: false,
      spanGaps: true,
      lineTension: 0,
      backgroundColor: '#0B3F9C',
      borderColor: '#0B3F9C',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'bevel',
      pointRadius: 0,
      pointHitRadius: 18
    }
    return (
      <>
        <GraphWrapper>
          <div
            style={{ maxWidth: '771px' }}
            className="center tc flex flex-column flex-row-ns justify-between pb3 pl2"
          >
            <this.ToggleTotalSupply />
            <div className="pb2 pb0-ns" />
            <this.ToggleLocked />
            <div className="pb2 pb0-ns" />
            <this.ToggleBurnt />
            <div className="pb2 pb0-ns" />
          </div>

          <div className="center tc pb4 pl2">
            <Radio.Group value={timePeriod} onChange={this.handleSizeChange}>
              <Radio.Button value={Seconds.DAY}>24H</Radio.Button>
              <Radio.Button value={Seconds.WEEK}>7D</Radio.Button>
              <Radio.Button value={Seconds.MONTH}>1M</Radio.Button>
              <Radio.Button value={Seconds.YEAR}>1Y</Radio.Button>
            </Radio.Group>
          </div>
          <Chartdiv>
            <Line
              options={{
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  display: false
                },
                tooltips: {
                  callbacks: {
                    title: (tooltipItem: any, data: any) => {
                      console.log(tooltipItem)
                      console.log(data)
                      return new Date(
                        tooltipItem[0].label * 1000
                      ).toLocaleString()
                      1
                    }
                  }
                },
                scales: {
                  xAxes: [
                    {
                      type: 'linear',
                      ticks: {
                        min: Date.now() / 1000 - this.state.timePeriod,
                        max: Date.now() / 1000,
                        callback: (value: any): ReactText =>
                          this.state.timePeriod === Seconds.DAY
                            ? `${new Date(
                                value * 1000
                              ).getUTCHours()}:${new Date(
                                value * 1000
                              ).getUTCMinutes()}`
                            : new Date(value * 1000).toLocaleDateString(),
                        fontFamily: 'Roboto',
                        fontColor: '#000000',
                        fontStyle: 'bold',
                        mirror: false,
                        stepSize: this.state.timePeriod / 4,
                        maxTicksLimit: 4
                      },
                      gridLines: {
                        tickMarkLength: 8,
                        display: true
                      }
                    }
                  ],
                  yAxes: [
                    {
                      type: 'linear',
                      ticks: {
                        callback: (value: number): ReactText =>
                          `${(value / 1000).toFixed(0)}K MYB`,
                        fontFamily: 'Roboto',
                        fontColor: '#000000',
                        fontStyle: 'bold',
                        mirror: true,
                        labelOffset: -9,
                        padding: -5,
                        min:
                          this.state.lockingLine.length > 0 ? this.getMin() : 0,
                        max:
                          this.state.lockingLine.length > 0 ? this.getMax() : 0,
                        maxTicksLimit: 4
                      },
                      gridLines: {
                        tickMarkLength: 5,
                        display: true
                      }
                    }
                  ]
                }
              }}
              data={{
                datasets: [
                  this.state.showBurnt
                    ? Burnt
                    : {
                        label: 'Burnt',
                        data: [],
                        fill: false,
                        lineTension: 0.07,
                        backgroundColor: '#3CBCF7',
                        borderColor: '#3CBCF7',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#3CBCF7',
                        pointBorderWidth: 1,
                        pointRadius: 0
                      },
                  this.state.showTotalSupply
                    ? TotalSupply
                    : {
                        label: 'TotalSupply',
                        data: [],
                        fill: false,
                        spanGaps: true,
                        lineTension: 0.07,
                        backgroundColor: '#0B3F9C',
                        borderColor: '#0B3F9C',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointRadius: 0
                      },
                  this.state.showLocked
                    ? Locked
                    : {
                        label: 'Locked',
                        data: [],
                        fill: false,
                        spanGaps: true,
                        lineTension: 0.07,
                        backgroundColor: '#1890FF',
                        borderColor: '#1890FF',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointRadius: 0
                      }
                ]
              }}
            />
          </Chartdiv>
        </GraphWrapper>
      </>
    )
  }
}

const Chartdiv = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  margin: auto;
`

const GraphWrapper = styled.div.attrs({
  className: 'pb4 pt4 pr4-ns pl4-ns'
})`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  max-width: 1128px;
  .ant-radio-button-wrapper-checked {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    -webkit-box-shadow: -1px 0 0 0 #1890ff;
    box-shadow: -1px 0 0 0 #1890ff;
  }
`
