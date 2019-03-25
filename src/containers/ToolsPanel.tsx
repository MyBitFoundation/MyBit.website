import React from 'react'
//import { Link } from '@reach/router';
import { Tool, ToolProps } from '@components/Tool'
import { Category, tools, categoryNames, Filter } from '@constants/tools'
import styled from 'styled-components'

export default class ToolsPanel extends React.Component<{
  category: Category
  filter: Filter
}> {
  categoryName: string

  constructor(props: { category: Category; filter: Filter }) {
    super(props)
    this.categoryName = categoryNames.get(props.category)
  }

  render() {
    return (
        <div className="ph2 pb2 w-100-ns">
          <STitle>{this.categoryName}</STitle>
          {tools.filter((e: ToolProps) => e.category === this.props.category).map(e => (
            <div style={{ opacity: this.props.filter === e.filter || this.props.filter === -1 ? 1 : 0.2 }}><Tool {...e} /></div>
            
          ))}
        </div>
    )
  }
}

const STitle = styled.div.attrs({ className: 'dn db-ns'})`
  font-family: Gilroy;
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 900;

  color: #6c6c6c;
`
