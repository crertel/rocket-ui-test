import React, { Component } from 'react';
import { connect } from "react-redux";

class LaunchDetails extends Component {
  render() {
    const { launch } = this.props;            
    return   (
        <div> 
            <h3>Rocket information</h3>
            <pre>
            { JSON.stringify(launch.rocket, null, 4) }
            </pre>
        </div>
    );
  }
};

const mapStateToProps = state => ({});  
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchDetails);
