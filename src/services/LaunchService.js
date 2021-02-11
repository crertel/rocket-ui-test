import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';

const api = axios.create();

const launchService = {
  getLaunches: () => api.get(`${SERVICES_URL}/launches`),
  getLaunchDetail: (flightNumber) => api.get(`${SERVICES_URL}/launches/${flightNumber}`)
};

export default launchService;
