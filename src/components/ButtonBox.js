import React from 'react';

import './ButtonBox.css';

import Button from './Button';

const ButtonBox = (props) => {
  return (
    <div className="button-box">
      <Button 
        onClick={props.onClickButton}
      >
        Click me, HARD!!!!
      </Button>
    </div>
  )
}

export default ButtonBox;