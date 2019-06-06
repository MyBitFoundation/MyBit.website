import React from 'react'

//import { ParamType } from 'ethers/utils'
import TrackerGraph from '@containers/TrackerGraph'
import { menuData } from '@constants/menus'
import Menu from '@containers/Menu'
import { ethers } from 'ethers'
import { MyBitToken } from 'types/contracts/MyBitToken'
import TransactionsTable from '@containers/TransactionsTable'
import trackerbg from '@images/trackerbg.svg'
import Transaction from '@containers/Transaction'
import styled from 'styled-components'
import 'antd/lib/radio/style/index.css'
import { withRouteData } from 'react-static'

export default withRouteData(
  class Tracker extends React.Component<
    any,
    { transaction: any; blockNumber: number }
  > {
    provider: ethers.providers.BaseProvider = ethers.getDefaultProvider()
    contract: MyBitToken = new ethers.Contract(
      '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
      require('@mybit/contracts/networks/ropsten/MyBitToken.json'),
      this.provider
    ) as MyBitToken

    state = { transaction: null, blockNumber: 0 }
    constructor(props: any) {
      super(props)
      ;(async () => {
        const blockNumber = await this.provider.getBlockNumber()
        this.setState({ blockNumber })
      })()
    }

    showTransaction = (transaction: any) => {
      this.setState({ transaction })
    }

    hideTransaction = () => {
      this.setState({ transaction: null })
    }
    render() {
      return (
        <Bg>
          <nav>
            <Menu items={menuData} isWhite={true} />
          </nav>
          <div className="center" style={{ maxWidth: 1128 }}>
            <Title>MyBit Token (MYB) Tracker</Title>
            <MobileTitle>MyBit Tracker</MobileTitle>
            {this.state.transaction ? (
              <Transaction
                {...this.state.transaction}
                currentBlockNumber={this.state.blockNumber}
                hideTransaction={this.hideTransaction}
              />
            ) : (
              <div>
                <TrackerGraph
                  blockNumber={this.state.blockNumber}
                  contract={this.contract}
                  data={this.props.chartData}
                />
                <div className="pb6" />
                <TransactionsTable
                  showTransaction={this.showTransaction}
                  firstPage={this.props.tableData}
                />
              </div>
            )}
          </div>
        </Bg>
      )
    }
  }
)

const Bg = styled.div.attrs({})`
  background: url(${trackerbg}) no-repeat;
  @media screen and (min-width: 30em) {
    background-size: 'contain';
  }
`;

const Title = styled.div.attrs({
  className: 'pt6 pb3 dn db-ns'
})`
  font-family: Gilroy;
  font-size: 48px;
  font-weight: 900;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`

const MobileTitle = styled.div.attrs({
  className: 'pt5 pb3 db dn-ns'
})`
  font-family: Gilroy;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  font-family: Gilroy;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`
