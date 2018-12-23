import React from 'react'
import Link from 'next/link'
import { Row, Col, Card, Button } from 'antd';
import { DEVELOPERS_DATA } from '../constants';
import stylesheet from './developers-cards.scss'

export class DevelopersCards extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className="developersCards">
          <Col xs={24} md={12}>
            <Card bordered={false} className="textCard textCard-text--left">
              <h2 className="textCard-header">{DEVELOPERS_DATA.title}</h2>
              <p className="textCard-content">{DEVELOPERS_DATA.content}
              </p>
              {
                DEVELOPERS_DATA.button &&
                <Button
                  type="primary"
                  className="developersCard-btn"
                  href={DEVELOPERS_DATA.button.url}
                  rel={DEVELOPERS_DATA.button.external ? "noopener noreferrer" : null}
                  target={DEVELOPERS_DATA.button.external ? "_blank" : null}
                >
                  {DEVELOPERS_DATA.button.text}
                </Button>
              }
            </Card>
          </Col>
          <Col xs={0} md={12}>
            <Card bordered={false} className="imageCard">
              <div className="imageCard-imageContainer">
                <div className="imageCard-imagecoder" />
              </div>
            </Card>
          </Col>
      </Row>
    </div>
    );
  }
}
