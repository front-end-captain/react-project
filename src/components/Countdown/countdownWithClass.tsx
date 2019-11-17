import React, { Component } from "react";

import { parseRemainingMillisecond, STEP, INTERVAL } from "./util";


interface CountDownProps {
  remainingTime: number;
  onLessThenZero?: () => void;
}

interface CountdownState {
  countdown: number;
}


class Countdown extends Component<CountDownProps, CountdownState> {
  state = {
    countdown: 0,
  };

  countdownTimer: number = 0;

  componentDidMount() {
    const { remainingTime } = this.props;
    if (remainingTime.toString.length > 0) {
      this.setState({ countdown: remainingTime });
    }
  }

  componentWillReceiveProps(nextProps: CountDownProps) {
    const { remainingTime } = this.props;
    if (nextProps.remainingTime !== remainingTime) {
      this.setState({ countdown: nextProps.remainingTime });
    }
  }

  shouldComponentUpdate(nextProps: CountDownProps) {
    const { remainingTime } = this.props;
    return !(nextProps.remainingTime === remainingTime && remainingTime === 0);
  }

  componentDidUpdate() {
    const { countdown } = this.state;
    const { onLessThenZero } = this.props;

    clearInterval(this.countdownTimer);

    if (countdown > 0) {
      this.handleCountdown(countdown);
    }

    if (countdown <= 0) {
      if (onLessThenZero) {
        onLessThenZero();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
  }

  handleCountdown = (countdown: number) => {
    this.countdownTimer = window.setTimeout(() => {
      this.setState({ countdown: countdown === 0 ? 0 : Math.abs(countdown) - STEP });
    }, INTERVAL);
  };

  render() {
    const { countdown } = this.state;

    return <strong>{parseRemainingMillisecond(countdown)}</strong>;
  }
}

export { Countdown };
