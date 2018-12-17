import React from 'react'
import { Card, Button } from 'antd';
import { MYBIT_TOKEN } from '../constants/mybit-token'
import stylesheet from './mybit-token-section.scss'


export class MyBitTokenSection extends React.Component {
  render() {
    return (
      <section className="Token">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Card bordered={false} className="Token-card" >
          <h2 className="Token-header">{MYBIT_TOKEN.title}</h2>
          <div className="Token-text">
            {MYBIT_TOKEN.content}
          </div>
          {
            MYBIT_TOKEN.button &&
            <Button type="primary" className="Token-btn" href={MYBIT_TOKEN.button.url}>
              { MYBIT_TOKEN.button.text }
            </Button>
          }
        </Card>
      </section>
    );
  }
}
