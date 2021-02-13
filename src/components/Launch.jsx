import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import {setLaunch} from "../actions/Launches";
import LaunchDetails from "../components/LaunchDetails";

class Launch extends Component {
  render() {
    const {launch, setLaunch, showDetails} = this.props;
    const handleClick = () => {setLaunch(launch.flight_number)};    
        
    return  <div onClick={handleClick}> 
      <h2> { launch.mission_name } </h2>
      <div> Flight Number: { launch.flight_number } </div>
      {showDetails?
        <LaunchDetails {...{launch}}/>
      : <div></div>
      }
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
