import React from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementAction } from '../store/count';

import './ButtonBox.css';

import Button from './Button';

const ButtonBox = (props) => {
  console.log(props)
  return (
    <div className="button-box">
      <Button 
        onClick={props.increment}
      >
        Click me, HARD!!!!
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment: incrementAction
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(ButtonBox);