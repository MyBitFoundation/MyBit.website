import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Highlight } from '../highlights'
import { Row, Col } from 'antd';
import { myBitAppsHighlights } from '../constants';
import stylesheet from './my-bit-applications.scss'


export class MyBitAppLications extends React.Component {
  render() {
    return (
      <section id="my-bit-apps-grid">
        <div className="grid-container">
          { myBitAppsHighlights.map((highlight) => {
            return (
                <Col xs={12} md={6} key={highlight.id} style={{'padding': 0, marginBottom: '16px'}}>
                <Highlight
                  noBit
                  flex
                  title={highlight.title}
                  isCentered
                  content={highlight.content}
                  style={{height: '100%', borderRadius: '4px', margin: '0 8px', padding: '20px 15px 13px'}}
                />
                </Col>
            )
          })}
        </div> 
      </section>
    );
  }
}
