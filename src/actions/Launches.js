import LaunchService from '../services/LaunchService';

export const ACTIONS = {
  REQUEST_LAUNCHES: 'REQUEST_LAUNCHES',
  RECEIVE_LAUNCHES: 'RECEIVE_LAUNCHES',
  REQUEST_LAUNCH_DETAILS: 'REQUEST_LAUNCH_DETAIL',
  RECEIVE_LAUNCH_DETAILS: 'RECEIVE_LAUNCH_DETAILS',
  SET_LAUNCH: 'SET_LAUNCH'
};

/* Launches querying */
export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.getLaunches().then(response => dispatch(receiveLaunches(response)));
};

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);


  /* Set launch */
  export const setLaunch = (launchId) => ({
    type: ACTIONS.SET_LAUNCH,
    id: launchId
  });
/* Launch details fetching */
export const requestLaunchDetails = (flightNumber) => ({
  type: ACTIONS.REQUEST_LAUNCH_DETAILS,
  launch: flightNumber
});
  
  const receiveLaunchDetails = response => ({
    type: ACTIONS.RECEIVE_LAUNCH_DETAILS,
    payload: {
      launchDetails: response.data
    }
  });
  
  export const fetchLaunchDetails = (dispatch, flightNumber) => {
    dispatch(requestLaunchDetails(flightNumber));
    return LaunchService.getLaunchDetails().then(response => dispatch(receiveLaunchDetails(response)));
  };
  
  const shouldFetchLaunchDetails = launchDetails => !launchDetails || !launchDetails.fetching;
  
  export const fetchLaunchDetailssIfNeeded = ({ dispatch, launchDetailsCollection, flightNumber }) =>
  shouldFetchLaunchDetails(launchDetailsCollection) && fetchLaunchDetails(dispatch, flightNumber);