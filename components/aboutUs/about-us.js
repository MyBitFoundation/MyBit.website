import React from 'react'
import { Row, Col, Card } from 'antd';
import { aboutUsData } from '../constants/about-us'
import stylesheet from './about-us.scss'

export class AboutUsSection extends React.Component {
  render() {
    return (
      <section className="aboutUs mainContainer">
       <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Row type="flex" className="aboutUs-row" gutter={{ xs:0, md:24 }}>
          {aboutUsData.map(data => (
            <Col xs={24} md={12} key={data.title}>
              <Card bordered={false} className={`aboutUs-col--${data.className}`}>
                {
                  data.title &&
                  <h2 className="aboutUs-header">
                    {data.title}
                  </h2>
                }
                <div className="aboutUs-content">
                  {data.content}
                </div>
                <div className="aboutUs-footer">
                  {data.footer}
                </div>
                {data.image && data.image.url &&
                  <a href={data.image.linkUrl}>
                    <img src={data.image.url} alt={data.image.alt} className="aboutUs-image"/>
                  </a>
                }
              </Card>
            </Col>
          ))}
      </Row>
      </section>
    );
  }
}
