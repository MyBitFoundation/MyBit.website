import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import stylesheet from './two-columns-card.scss';

export class TwoColumnsCard extends React.Component {
  render() {
    const { columnsData } = this.props;
    return (
        <Row type="flex" className="TwoColumnsCard">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {columnsData.map(data => (
          <Col xs={24} md={12} key={data.title}>
            <Card bordered={false} className={`textCard textCard--${data.type}`}>
              <div className={`textCard-contentWrapper textCard-contentWrapper--${data.className}`}>
                <h2 className="textCard-header">{data.title}</h2>
                <div className="textCard-content">
                  {data.content}
                </div>
                {data.button &&
                <div className="TwoColumnsCard-btnWrapper">
                  <Button 
                    type="primary" 
                    className="TwoColumnsCard-btn" 
                    href={data.button.url} 
                    target={data.button.external ? '_blank' : null} 
                    rel={data.button.external ? 'noopener noreferrrer' : null}
                  >
                    {data.button.text}
                  </Button>
                </div>
                }
              </div>
            </Card>
          </Col>
          ))}
      </Row>
    );
  }
}
