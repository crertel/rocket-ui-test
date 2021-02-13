import React, { Component } from 'react';
import { connect } from "react-redux";
import { setLaunch } from "../actions/Launches";
import LaunchDetails from "../components/LaunchDetails";

class Launch extends Component {
  render() {
    const {launch, setLaunch, showDetails} = this.props;
    const handleClick = () => {
      setLaunch( showDetails? "" : launch.flight_number);
    };    
        
    return  <div onClick={handleClick} class="rocket-entry"> 
      <h2> { launch.mission_name } </h2>
      <div>Flight Number: { launch.flight_number } </div>
      {showDetails? <LaunchDetails {...{launch}}/> : <div/> }
    </div>;
  }
}

const mapStateToProps = state => ({
  currentLaunch: state.currentLaunch
});

const mapDispatchToProps = dispatch => ({
    setLaunch: (launchId) => { dispatch( setLaunch(launchId) ); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Launch);
