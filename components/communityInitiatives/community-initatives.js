import React from 'react'
import { Card } from 'antd';
import { InputForm } from '../inputForm/input-form';
import stylesheet from './community-initiatives.scss'


export class CommunityInitiatives extends React.Component {
  handleSubmit = () => {
    console.log('submit form');
  }

  render() {
    return (
      <section className="communityInitiatives">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Card bordered={false} className="communityInitiatives-card" >
          <h2 className="communityInitiatives-header">Community initiatives</h2>
          <p className="communityInitiatives-text">
            In addition to organised funds, MyBit Ventures strives to support the community.
            We host a range of events and hackathons worldwide to promote user engagement and
            the growth of the MyBit Network.
          </p>
          <div className="communityInitiatives-formWrapper">
            <InputForm title="Sign Up" onSubmit={this.handleSubmit} placeholder="Your email address"/>
          </div>
        </Card>
      </section>
    );
  }
}
