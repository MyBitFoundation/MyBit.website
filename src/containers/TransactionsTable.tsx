import EtherscanAddress from '@components/EtherscanAddress'
import { Table, Pagination, Select } from 'antd'
import axios from 'axios'
import moment from 'moment'
import { ethers } from 'ethers'
import React from 'react'
import styled from 'styled-components'
import { shorten } from '../utils'
import ListTransaction from '@components/ListTransaction'
import 'antd/lib/table/style/index.css'
import 'antd/lib/pagination/style/index.css'
import 'antd/lib/select/style/index.css'
import { LabeledValue } from 'antd/lib/select'
export default class TransactionsTable extends React.Component<
  { showTransaction: any; firstPage: Array<any> },
  {
    data: Array<any>
    pagination: any
    loading: boolean
    dAppFilter: LabeledValue
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      pagination: { pageSize: 10, current: 0, total: 100 },
      loading: false,
      dAppFilter: { key: '_', label: 'All dApps' }
    }
  }
  componentDidMount() {
    const data = this.props.firstPage
    console.log('data', data)
    const pagination = { ...this.state.pagination }
    this.setState({
      data: data.map((e: any) => {
        e.relativeTime = moment(moment.unix(e.events[0].timestamp)).fromNow()
        const transfers = e.events.filter((e: any) => e.name === 'Transfer')
        if (transfers.length > 0) {
          e.value = ethers.utils.parseEther(transfers[0].p2)
        }
        return e
      }),
      pagination
    })
  }
  handleTableChange = async (pageNum: number, pageSize: number) => {
    const pager = { ...this.state.pagination }
    pager.current = pageNum
    this.setState({
      pagination: pager
    })
    const response = await axios.get(
      `https://ih9op4cnf9.execute-api.us-east-1.amazonaws.com/prod?skip=${pageNum *
        10}&take=${pageSize}${this.state.dAppFilter.key !== '_' ? '&to=' : ''}${
        this.state.dAppFilter
      }`
    )
    console.log(response)
    const data = response.data
    this.setState({
      data: data.map((e: any) => {
        e.relativeTime = moment(moment.unix(e.events[0].timestamp)).fromNow()
        const transfers = e.events.filter((e: any) => e.name === 'Transfer')
        if (transfers.length > 0) {
          e.value = ethers.utils.parseEther(transfers[0].p2)
        }
        return e
      })
    })
  }

  handleFilterChange = async (value: LabeledValue) => {
    const response = await axios.get(
      `https://ih9op4cnf9.execute-api.us-east-1.amazonaws.com/prod?skip=${
        this.state.pagination.current ? this.state.pagination.current : 0 * 10
      }&take=10${value.key !== '_' ? '&to=' : ''}${value.key}`
    )
    const data = response.data
    this.setState({
      data: data.map((e: any) => {
        e.relativeTime = moment(moment.unix(e.events[0].timestamp)).fromNow()
        const transfers = e.events.filter((e: any) => e.name === 'Transfer')
        if (transfers.length > 0) {
          e.value = ethers.utils.parseEther(transfers[0].p2)
        }
        return e
      }),
      dAppFilter: value
    })
  }

  columns = [
    {
      title: 'Time',
      dataIndex: 'relativeTime',
      render: (time: any) => time
    },
    {
      title: 'From',
      dataIndex: 'from',
      render: (from: any, data: any) =>
        from ? (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => this.props.showTransaction(data)}
          >
            <EtherscanAddress notEtherscan shorten={true} address={from} />
          </div>
        ) : (
          ''
        )
    },
    {
      title: 'To',
      dataIndex: 'to',
      render: (to: any, data: any) =>
        to ? (
          <div
            onClick={() => this.props.showTransaction(data)}
            style={{ cursor: 'pointer' }}
          >
            <EtherscanAddress
              notEtherscan
              shorten={true}
              address={
                to === '0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC'
                  ? data.events[0].p1
                  : to
              }
            />
          </div>
        ) : (
          ''
        )
    },
    {
      title: 'Hash',
      dataIndex: 'hash',
      render: (txHash: any, record: any) => (
        <div
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => this.props.showTransaction(record)}
        >
          {shorten(txHash)}
        </div>
      )
    },
    {
      title: 'Value',
      dataIndex: 'value',
      render: (value: any) =>
        value != undefined && value != "0.0"
          ? parseFloat(ethers.utils.formatEther(
            value
          )).toFixed(3)
          : '0'
    },
    {
      title: 'Fee',
      dataIndex: 'fee',
      render: () => 0
    }
  ]

  render() {
    return (
      <>
        <div className="flex flex-column flex-row-ns justify-between items-center center tc">
          <Transactions>Transactions</Transactions>
          <div className="tl-ns pb2 order-0-ns w-50 w-33-ns">
            <Select
              defaultValue={{ key: '' }}
              labelInValue
              onChange={this.handleFilterChange}
              className="w4"
              value={this.state.dAppFilter}
            >
              <Select.Option value="">All dApps</Select.Option>
              <Select.Option disabled value="0x0">
                Go
              </Select.Option>
              <Select.Option value="0xfe03084c34b2dc3a171f9a738f4e478707666f0f">
                Trust
              </Select.Option>
              <Select.Option value="0xc7e7790fc0c81a2d880b1e119ba0921881f0cdef">
                DAO
              </Select.Option>
            </Select>
          </div>
          <PaginationWrapper>
            <Pagination
              {...this.state.pagination}
              onChange={this.handleTableChange}
            />
          </PaginationWrapper>
        </div>
        <Desktop>
          <Table
            columns={this.columns}
            dataSource={this.state.data}
            pagination={false}
            loading={this.state.loading}
          />
        </Desktop>
        <Mobile>
          {this.state.data.map((e: any, i: number, data: any) => {
            return (
              <>
                <ListTransaction
                  showTransaction={this.props.showTransaction}
                  {...e}
                />
                {i === data.length - 1 ? null : (
                  <div style={{ backgroundColor: '#D9D9D9', height: '1px' }} />
                )}
              </>
            )
          })}
        </Mobile>
        <div className="flex flex-column flex-row-ns justify-between items-center center tc pt3">
          <div className="tl-ns pb2 order-1-ns w-50 w-33-ns">
            <Select
              defaultValue={{ key: '' }}
              labelInValue
              onChange={this.handleFilterChange}
              className="w4"
              value={this.state.dAppFilter}
            >
              <Select.Option value="">All dApps</Select.Option>
              <Select.Option disabled value="0x0">
                Go
              </Select.Option>
              <Select.Option value="0xfe03084c34b2dc3a171f9a738f4e478707666f0f">
                Trust
              </Select.Option>
              <Select.Option value="0xc7e7790fc0c81a2d880b1e119ba0921881f0cdef">
                DAO
              </Select.Option>
            </Select>
          </div>
          <PaginationWrapper>
            <Pagination
              {...this.state.pagination}
              onChange={this.handleTableChange}
            />
          </PaginationWrapper>
        </div>
        <div className="pb7" />
      </>
    )
  }
}

const PaginationWrapper = styled.div.attrs({ className: 'order-2-ns' })`
  @media screen and (max-width: 30em) {
    width: '100%';
  }
  @media screen and (min-width: 30em) {
    width: '33%';
  }
  padding-bottom: 16px;
`

const Transactions = styled.div.attrs({ className: 'order-1-ns' })`
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  align-items: center;
  text-align: center;
  color: #111111;
  display: inline;
  list-style: none;
  width: 33%;
  padding-bottom: 16px;
`

const Desktop = styled.div.attrs({ className: 'dn db-ns' })`
  .ant-table-body {
    max-width: 1128px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
      0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: #383838;
  }
  .ant-table-thead > tr {
    max-width: 1128px;
    background: #ffffff;
    color: #383838;
  }
  .ant-table-title {
    max-width: 256px;
    display: inline;
  }
  .ant-pagination {
    display: inline;
  }
  .ant-table-pagination {
    display: inline;
  }
  .ant-table-pagination.ant-pagination {
    float: none;
    margin: 0;
`

const Mobile = styled.div.attrs({ className: 'dn-ns db' })`
  .ant-pagination {
    display: inline;
  }
`
