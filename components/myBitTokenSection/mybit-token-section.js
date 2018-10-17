import React from 'react'
import { Card, Button } from 'antd';
import { myBitToken } from '../constants/mybit-token'
import stylesheet from './mybit-token-section.scss'


export class MyBitTokenSection extends React.Component {
  render() {
    return (
      <section className="Token">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Card bordered={false} className="Token-card" >
          <h2 className="Token-header">{myBitToken.title}</h2>
          <div className="Token-text">
            {myBitToken.content}
          </div>
          {
            myBitToken.button &&
            <Button type="primary" className="Token-btn" href={myBitToken.button.url}>
              { myBitToken.button.text }
            </Button>
          }
        </Card>
      </section>
    );
  }
}
