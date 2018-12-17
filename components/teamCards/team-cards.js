import React from 'react'
import Link from 'next/link'
import { Row, Col, Card, Button } from 'antd';
import { TEAMS_DATA } from '../constants';
import stylesheet from './team-cards.scss'

export class TeamCards extends React.Component {
  render() {
    return (
        <Row type="flex" className="teamCards">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <Col xs={0} md={12}>
              <Card bordered={false} className="imageCard imageCard--dark">
                <div className="imageCard-imageContainer">
                  <img src={TEAMS_DATA.image}/>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card bordered={false} className="textCard textCard-text--right">
                <div className="textCard-contentWrapper">
                  <h2 className="textCard-header">{TEAMS_DATA.title}</h2>
                  <p className="textCard-content">
                    {TEAMS_DATA.content}
                  </p>
                  {
                  TEAMS_DATA.button &&
                  <Link href={TEAMS_DATA.button.url}>
                  <Button type="primary" className="developersCard-btn">
                    {TEAMS_DATA.button.text}
                  </Button>
                  </Link>
                  }
                </div>
              </Card>
            </Col>
        </Row>
    );
  }
}
