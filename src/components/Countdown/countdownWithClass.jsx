import React, { Component } from "react";
import PropTypes from "prop-types";

import { parseRemainingMillisecond, STEP, INTERVAL } from "./utils.js";

// props: remainingTime: number 毫秒
// onLessThenZero: () => void;

class CountDown extends Component {
  state = {
    countdown: 0,
  };

  componentDidMount() {
    const { remainingTime } = this.props;
    if (remainingTime.toString().length > 0) {
      this.setState({ countdown: remainingTime });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { remainingTime } = this.props;
    if (nextProps.remainingTime !== remainingTime) {
      this.setState({ countdown: nextProps.remainingTime });
    }
  }

  shouldComponentUpdate(nextProps) {
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

  handleCountdown = (countdown) => {
    this.countdownTimer = setTimeout(() => {
      this.setState({ countdown: countdown === 0 ? 0 : Math.abs(countdown) - STEP });
    }, INTERVAL);
  };

  render() {
    const { countdown } = this.state;
    return <strong>{parseRemainingMillisecond(countdown)}</strong>;
  }
}

CountDown.propTypes = {
  onLessThenZero: PropTypes.func,
  remainingTime: PropTypes.number.isRequired,
};

export { CountDown };
