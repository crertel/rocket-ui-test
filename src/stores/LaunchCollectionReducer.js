import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  currentLaunch: null,
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.REQUEST_LAUNCH_DETAILS]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCH_DETAILS]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launchDetails: [...state.launchDetails, ...action.payload.launchDetails]
  }),
  [ACTIONS.SET_LAUNCH]: ( {state, action}) => ({
    ...state,
    currentLaunch: action.id
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
