import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './input-form.scss'
import axios from 'axios';
import { links } from '../constants/links';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: false
    };
  }

  onInputChange = (e) => {
    if (this.state.confirmation) {
      this.setState({
        confirmation: false
      });
    }
  }

  showConfirmationMessage = () => {
    this.setState({
      confirmation: true
    });
    setTimeout( () => this.setState({confirmation: false}), 3000 );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { getFieldError, getFieldValue } = this.props.form;
    
    const email_address = getFieldValue('email');
    if (!email_address) {
      return
    }

    const error = getFieldError('email');
    if (error && error[0]) {
      return
    }

    this.showConfirmationMessage();
  
    axios.post(links.subscribeLink, {
      email_address
    })
    .then(function (response) {
      console.log(response);
      e.target['email_address'].value = '';
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { getFieldDecorator, getFieldProps, validateFields } = this.props.form;
    const { confirmation } = this.state;
    const label = this.props.btnTitle;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit} className={
        classNames({
          'Signup': true
        })}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <FormItem className={classNames({'Signup__email-container': true})}>
          {getFieldDecorator('email', {
            rules: [
              {type: 'email', message: 'Please enter a valid e-mail address'}, 
              {required: true, message: 'Please enter a valid e-mail address'},
            ]})
            (<Input
              name="email_address"
              className={
              classNames({
                'Signup__email-input': true
              })}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}/>
            )
          }
        </FormItem>
        <FormItem className={classNames({'Signup__btn-container': true})}>
          <Button type="primary" htmlType="submit" className={classNames({'Signup__button': true})}>
            {label}
          </Button>
        </FormItem>
        <div className={classNames({'Signup__confirmation': confirmation, 'Signup__display-none': !confirmation,})}>
          Please check your email to confirm the subscription. Thank you.
        </div>
      </Form>

    );
  }
}

const WrappedSignupForm = Form.create()(Signup);

export const InputForm = ({title, onSubmit, placeholder}) => {
    return(
      <div className={
        classNames({
        'InputForm': true
        })
    }>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <WrappedSignupForm btnTitle={title} onSubmit={onSubmit} placeholder={placeholder}/>
      </div>
    )
}


InputForm.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
}

InputForm.defaultProps = {
  title: "Sign up",
  onSubmit: () => {}
}
