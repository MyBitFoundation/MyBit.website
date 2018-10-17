import React, { Fragment } from 'react'
import { Row, Col, Card } from 'antd';
import { venturesInfo } from '../constants/mybit-ventures';
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
                <h2 className="textCard-header">{venturesInfo.title}</h2>
                <div className="textCard-content">
                  {venturesInfo.content}
                </div>
              </Card>
            </Col>
            <Col xs={0} md={12}>
              <Card bordered={false} className="imageCard">
                  <img src={venturesInfo.image.url} alt={venturesInfo.image.alt} className="Ventures-image"/>
              </Card>
            </Col>
          </Row>
        </section>
      </Fragment>
    );
  }
}
