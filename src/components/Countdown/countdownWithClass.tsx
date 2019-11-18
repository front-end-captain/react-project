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
  state: CountdownState;

  countdownTimer: number;

  constructor(props: CountDownProps) {
    super(props);

    this.state = {
      countdown: 0,
    };

    this.countdownTimer = 0;
  }

  componentDidMount(): void {
    const { remainingTime } = this.props;
    if (remainingTime.toString.length > 0) {
      this.setState({ countdown: remainingTime });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: CountDownProps): void {
    const { remainingTime } = this.props;
    if (nextProps.remainingTime !== remainingTime) {
      this.setState({ countdown: nextProps.remainingTime });
    }
  }

  shouldComponentUpdate(nextProps: CountDownProps): boolean {
    const { remainingTime } = this.props;
    return !(nextProps.remainingTime === remainingTime && remainingTime === 0);
  }

  componentDidUpdate(): void {
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

  componentWillUnmount(): void {
    clearInterval(this.countdownTimer);
  }

  handleCountdown(countdown: number): void {
    this.countdownTimer = window.setTimeout(() => {
      this.setState({ countdown: countdown === 0 ? 0 : Math.abs(countdown) - STEP });
    }, INTERVAL);
  }

  render(): JSX.Element {
    const { countdown } = this.state;

    return <strong>{parseRemainingMillisecond(countdown)}</strong>;
  }
}

export { Countdown };
