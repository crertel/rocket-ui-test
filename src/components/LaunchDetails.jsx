import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";


class LaunchDetails extends Component {
  render() {
    const { launch } = this.props;            
    return   (
        <div> 
            { JSON.stringify(launch) }
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchDetails);
