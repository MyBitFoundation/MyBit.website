import React from 'react'
import Btn from './Button'
import { STracked } from './STracked'
import { SBlueBg } from './SBlueBg'
import { SParagraph } from './SParagraph'
import { SSubHeadlineAlt } from './SSubHeadlineAlt'
import { StdInfo } from './StdInfo'
import { CountdownHours } from './CountdownHours'
export const MYBIT_TOKEN_SALE_API_ENDPOINT = 'https://api.mybit.io'
export const MYBIT_TOKEN_SALE_WEBSITE = 'https://td.mybit.io'
export const DAY_IN_SECONDS = 86400
export const MINUTE_IN_MILLISECONDS = 60000
export const DAY_IN_MILLISECONDS = 86400000

export const COUNTDOWN_INFO = {
  finalDate: new Date('Jan 01 2019 12:00:00 GMT-0'),
  title: 'Token Distribution Phase 2 Begins Jan 1, 2019',
  parts: { day: 'Days', hour: 'Hours', minut: 'Minutes', second: 'Seconds' }
}
interface TdData {
  currentDayServer: number
  currentPeriodTotal: number
  ethPrice: number
  exchangeRate: number
  loaded: boolean
  timestampStartTokenSale: number
}
export class TokenSale extends React.Component<{}, TdData> {
  state: TdData = {
    currentDayServer: 57,
    currentPeriodTotal: 7.11,
    ethPrice: 136.38564802085827,
    exchangeRate: 12330.456226880397,
    loaded: true,
    timestampStartTokenSale: 1546344000
  }

  constructor(props: any) {
    super(props)
    this.getData()
  }

  private getSecondsUntilNextPeriod = (timestampStartTokenSale: number) => {
    const currentDay =
      (Math.floor(Date.now() / 1000) - timestampStartTokenSale) /
        DAY_IN_SECONDS +
      1
    const past = currentDay % 1
    const secondsUntilNextPeriod = (1 - past) * DAY_IN_SECONDS

    return secondsUntilNextPeriod
  }

  private getData = async () => {
    const res = await fetch('https://api.mybit.io/token-sale/home')
    const tdData = await res.json()
    this.setState(tdData)
  }
  render() {
    return (
      <SBlueBg>
        <SSubHeadlineAlt>
          {`Period #${this.state.currentDayServer} ends in `}
          <CountdownHours
            time={this.getSecondsUntilNextPeriod(
              this.state.timestampStartTokenSale
            )}
          />
        </SSubHeadlineAlt>
        <div className="flex-ns flex-row-ns pa3">
          <div className="w-50-ns">
            <SParagraph color="white">
              In 2019, we are excited to conduct our second token distribution
              to enable user acquisition, scalability and full decentralisation
              of the MyBit project. It’s an especially ideal time following last
              year’s market movements, and we are focusing this round to attract
              a truly vested group of early adopters and contributors.
            </SParagraph>
          </div>
          <div className="w-50-ns">
            <div className="flex-ns flex-row-ns justify-between">
              <div>
                <STracked>Current Exchange Rate</STracked>
                <StdInfo>{`1 ETH = ${this.state.exchangeRate.toFixed(
                  0
                )} MYB`}</StdInfo>
              </div>
              <div>            <STracked>Eth Recieved</STracked>
            <StdInfo>{`${this.state.currentPeriodTotal.toFixed(2)} ETH`}</StdInfo></div>
            </div>
            <Btn text="contribute" linkTo="https://td.mybit.io/" isWhite={true} />
            <div className="pb4" />
          </div>
        </div>
      </SBlueBg>
    )
  }
}

