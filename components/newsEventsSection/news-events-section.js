import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import stylesheet from './news-events-section.scss';
import {
  EVENTS_DATA,
  NEWS_DATA
} from '../constants'

export class NewsEventsSection extends React.Component {
  render() {
    return (
      <section className="newsEventsSection mainContainer">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className="newsEventsCards" gutter={{ xs:0, md:24 }}>
          <Col xs={24} md={12}>
            <Card bordered={false} className="newsCard" >
              <h2 className="newsEventsCards-header">{NEWS_DATA.title}</h2>
              <div className="newsEventsCards-imageContainer">
                <img src={NEWS_DATA.imageUrl} className="newsCard-image"/>
              </div>
              {
                NEWS_DATA.button &&
                <Button
                  type="primary"
                  className="newsEventsCards-btn"
                  href={NEWS_DATA.button.url}
                  rel={NEWS_DATA.button.external ? 'noopener noreferrer' : null}
                  target={NEWS_DATA.button.external ? '_blank' : null}
                >
                  {NEWS_DATA.button.text}
                </Button>
              }
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card bordered={false} className="eventsCard" >
              <h2 className="newsEventsCards-header">{EVENTS_DATA.title}</h2>
              <div className="newsEventsCards-imageContainer">
                <img src={EVENTS_DATA.imageUrl} className="newsCard-image"/>
              </div>
              {
                EVENTS_DATA.button &&
                <Button
                  type="primary"
                  className="newsEventsCards-btn"
                  href={EVENTS_DATA.button.url}
                  rel={EVENTS_DATA.button.external ? 'noopener noreferrer' : null}
                  target={EVENTS_DATA.button.external ? '_blank' : null}
                >
                  {EVENTS_DATA.button.text}
                </Button>
              }
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}
