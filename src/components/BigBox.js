import React from 'react';

import './BigBox.css';

import ButtonBox from './ButtonBox';
import CountBox from './CountBox';

const BigBox = () => {
  return (
    <div className="big-box">
      <ButtonBox />
      <CountBox/>
    </div>
  )
}

export default BigBox;