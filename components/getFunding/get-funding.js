import React, { Fragment, Component } from 'react';
import { InputForm } from '../inputForm/input-form';
import stylesheet from './get-funding.scss';

export class GetFunding extends Component {
    render() {
      return (
        <Fragment>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="GetFunding__wrapper">
            <div className="GetFunding__header">Get Funding</div>
            <div className="GetFunding__text">
              Apply for Funding. MyBit supports innovative and disruptive
              initiatives. Anyone with an idea and the capacity to develop a
              proof of concept is eligible to apply for funding which typically
              will range from 25.000 to 50.000 but could be more or less
              depending on the concept.
            </div>
            <div className="GetFunding__footer">Coming in 2019</div>
            <div className="GetFunding__formWrapper">
              <InputForm title="Sign Up" onSubmit={this.handleSubmit} placeholder="Your email address"/>
            </div>
          </div>
        </Fragment>
      );
    }
}
