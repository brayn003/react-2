import React from 'react';

import './BigBox.css';

import ButtonBox from './ButtonBox';
import CountBox from './CountBox';

class BigBox extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="big-box">
        <ButtonBox onClickButton={this.increment} />
        <CountBox count={this.state.count} />
      </div>
    )
  }

}

export default BigBox;