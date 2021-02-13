import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import { fetchLaunchesIfNeeded } from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;    
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;    
    const { currentLaunch } = launchCollection;
    
    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    } else if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    } else {    
      return (
      <div>        
        <ul>
          {launchCollection.launches.map( (launch) =>
            <li key={`${launch.flight_number}  ${launch.mission_name}`}>
              <Launch {...{launch, showDetails: currentLaunch == launch.flight_number}}/>
            </li>
          )}
        </ul>
      </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2> SpaceX launches </h2>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
