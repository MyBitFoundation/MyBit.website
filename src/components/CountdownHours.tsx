import React from 'react'

export class CountdownHours extends React.Component<
  { time: number },
  { secondsToGo: number }
> {
  constructor(props: { time: number }) {
    super(props)
    this.state = {
      secondsToGo: this.props.time
    }
  }
  updateCountdownInterval: number
  componentDidMount() {
    this.updateCountdownInterval = setInterval(
      () =>
        this.setState(prevState => {
          return {
            secondsToGo: prevState.secondsToGo - 1
          }
        }),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.updateCountdownInterval)
  }

  render() {
    let { secondsToGo } = this.state
    let hours: any = Math.floor(secondsToGo / 3600)
    hours = hours < 10 ? '0' + hours : hours
    secondsToGo = secondsToGo % 3600
    let minutes: any = Math.floor(secondsToGo / 60)
    minutes = minutes < 10 ? '0' + minutes : minutes
    let seconds: any = secondsToGo % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    return <span>{`00:${hours}:${minutes}:${seconds.toString().substr(0,2)}`}</span>
  }
}
