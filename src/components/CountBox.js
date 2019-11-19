import React from 'react';
import {connect} from 'react-redux';
import './CountBox.css';

const CountBox = (props) => {
  return (
    <div className="count-box">
      Count = {props.count}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.countValue.count
  }
}

export default connect(mapStateToProps, null)(CountBox);