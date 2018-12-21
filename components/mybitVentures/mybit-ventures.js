import React, { Fragment } from 'react'
import { Row, Col, Card } from 'antd';
import { VENTURES_INFO } from '../constants/mybit-ventures';
import stylesheet from './mybit-ventures.scss'

export class MybitVentures extends React.Component {
  render() {
    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <section className="Ventures">
          <Row type="flex" className="Ventures-row">
            <Col xs={24} md={12}>
              <Card bordered={false} className="textCard">
                <h2 className="textCard-header">{VENTURES_INFO.title}</h2>
                <div className="textCard-content">
                  {VENTURES_INFO.content}
                </div>
              </Card>
            </Col>
            <Col xs={0} md={12}>
              <Card bordered={false} className="imageCard">
                  <img src={VENTURES_INFO.image.url} alt={VENTURES_INFO.image.alt} className="Ventures-image"/>
              </Card>
            </Col>
          </Row>
        </section>
      </Fragment>
    );
  }
}
