import React from 'react';

import './CountBox.css';

const CountBox = (props) => {
  return (
    <div className="count-box">
      Count = {props.count}
    </div>
  )
}

export default CountBox;