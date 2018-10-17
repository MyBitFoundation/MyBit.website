import React from 'react'
import { Card, Button, Col, Row } from 'antd';
import { InputForm } from '../inputForm/input-form';
import stylesheet from './tokenSale.scss';


export class TokenSale extends React.Component {
  handleSubmit = () => {
    console.log('submit form');
  }
  handleLearnMore = () => {
    console.log('learn more');
  }
  render() {
    return (
      <section className="token-sale">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Card bordered={false} className="communityInitiatives" >
          <h2 className="communityInitiatives-header">Tokensale</h2>
          <Row className='communityInitiatives-cards'>
            <Col  xs={24} sm={24} md={12}>
            <div className = 'communityInitiatives-cards-card first'>
              <p>
                Phases one:
              </p>
              <p>
                Tokensale (seed round equivalent) was completed on August 17, 2017 with 10,044 ETH contributed.
              </p>
            </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
            <div className = 'communityInitiatives-cards-card first'>
              <p>
                Phase two:
              </p>
              <p>
                Tokensale (series A equivalent) will begin on January 1, 2019.
              </p>
              </div>
            </Col>
          </Row>
          <p className="communityInitiatives-text">
            Any future phases should be at the discretion of the community due to the governance protocols which are
            slowly being integrated into the MyBit business model to work towards a fully decentralised autonomous
            organisation.
          </p>
          <div className="communityInitiatives-formWrapper">
            <InputForm title="Sign Up" onSubmit={this.handleSubmit} placeholder="Your email address" />
          </div>
          <p className='communityInitiatives-Sign-up-for-latest'>
            Sign up for latest information regarding the tokensale.
          </p>
        </Card>
      </section>
    );
  }
}
