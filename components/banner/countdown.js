import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import { Button } from 'antd';
import stylesheet from './countdown.scss'
import { COUNTDOWN_INFO } from '../constants'
import { InputForm } from '../inputForm/input-form';

const tokensalePhaseStartDate = COUNTDOWN_INFO.finalDate;//month starts with 0
const millisecondsInOneDay = 86400000;
const millisecondsInOneHour = 1000 * 60 * 60;
const millisecondsInOneMinute = 1000 * 60;
const millisecondsInOneSeconds = 1000;

class Timer extends Component {
  constructor(){
    super();

    this.state = { currentCountdown: this.getCountdown() }
    this.intervalId = null;

  }

  getCountdown = () => {
    const today = new Date();
    const difference = tokensalePhaseStartDate.getTime() - today.getTime();

    if(difference < 0){
      clearInterval(this.intervalId);
      return;
    }

    const daysUntil = Math.floor(difference / millisecondsInOneDay);

    const hourMilliseconds = difference - (daysUntil * millisecondsInOneDay);
    const hours = Math.floor(hourMilliseconds / millisecondsInOneHour);

    const minutesMilliseconds = difference - (daysUntil * millisecondsInOneDay) - (hours *  millisecondsInOneHour);
    const minutes = Math.floor(minutesMilliseconds / millisecondsInOneMinute);

    const secondsMillisecons = difference - (daysUntil * millisecondsInOneDay) - (hours * millisecondsInOneHour) - (minutes * millisecondsInOneMinute);
    const seconds = Math.floor(secondsMillisecons / millisecondsInOneSeconds);

    return {days: daysUntil, hours: hours, minutes: minutes, seconds: seconds};
  }

  startCountdown = () => {
    this.setState({currentCountdown: this.getCountdown() });
    this.intervalId = setInterval(() =>{
      this.setState({currentCountdown: this.getCountdown() });
    }, 1000);
  }

  componentDidMount = () => {
    this.startCountdown();
  }

  componentWillUnmount = () =>{
    clearInterval(this.intervalId);
  }

  render(){
    const { day, hour, minut, second } = COUNTDOWN_INFO.parts;
    const { days, hours, minutes, seconds } = this.state.currentCountdown;

    return (
      <div className="Timer">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="Timer__time-unit">
            <div className="Timer__header">{day}</div>
            <div className="Timer__value">{days}</div>
        </div>
        <div className={
              classNames({
                'Timer__time-unit': true
              })
            }>
            <div className="Timer__header">{ hour }</div>
            <div className="Timer__value">{ hours }</div>
        </div>
        <div className={
              classNames({
                'Timer__time-unit': true
              })
            }>
            <div className="Timer__header">{ minut }</div>
            <div className="Timer__value">{ minutes }</div>
        </div>
        <div className={
              classNames({
                'Timer__time-unit': true
              })
            }>
            <div className="Timer__header">{ second }</div>
            <div className="Timer__value">{ seconds }</div>
        </div>
      </div>
    )
 }
}

const Countdown = ({ renderTokenSaleDetails }) => {
    return(
      <Fragment>
        <div className="Countdown">
          <div className="Banner__title">{COUNTDOWN_INFO.title}</div>
            <Timer
              renderTokenSaleDetails={renderTokenSaleDetails}
            />
            <div className="Countdown__contribute">
              <span className="Countdown__pre-contributions-txt">Pre contributions now open</span>
              <a href="/dashboard">
               <Button
                  type="primary"
                  className="Countdown__btn"
                >
                  Contribute
                </Button>
              </a>
            </div>
        </div>
      </Fragment>
    )
}

export default Countdown;
