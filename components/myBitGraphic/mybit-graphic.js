import React from 'react';
import { Row, Col, Card } from 'antd';
import { graphicInfo } from '../constants/mybit-graphic';
import stylesheet from './mybit-graphic.scss';

export class MyBitGraphic extends React.Component {
  render() {
    const { graphic } = this.props;
    return (
      <section className="Graphic">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className='Graphic-row'>
          <Col xs={24} md={11}>
            <Card bordered={false} className="textCard">
              <h2 className="textCard-header">{graphicInfo.title}</h2>
              <div className="textCard-content">
                {graphicInfo.content}
              </div>
            </Card>
          </Col>
          <Col xs={0} md={13}>
            <Card bordered={false} className="graphicCard">
              <div className="graphicCard-imageContainer">
                {
                  graphic
                  && <img src={graphic} alt="Graphic" className="graphic-image"/>
                }
              </div>
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}
