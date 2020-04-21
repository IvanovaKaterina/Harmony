// -------------- ACTION TYPE --------------
const SERVICES_FETCH_DATA_SUCCESS = 'SERVICES_FETCH_DATA_SUCCESS';
const SERVICES_FETCHING_DATA = 'SERVICES_FETCHING_DATA';
const SERVICES_FETCH_DATA_FAILED = 'SERVICES_FETCH_DATA_FAILED';

const defaultState = {
  services: [],
  isFetching: false,
  error: ''
};

// -------------- ACTION CREATOR --------------
export const servicesFetchData = (url) => (dispatch) => {
  dispatch({ type: SERVICES_FETCHING_DATA });
  fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error (response.statusText)
    }
    return response;
  })
  .then(response => response.json())
  .then(services => dispatch({ type: SERVICES_FETCH_DATA_SUCCESS, services }))
}

// -------------- REDUCER --------------
function services(state = defaultState, action) {
  switch (action.type) {
    case SERVICES_FETCH_DATA_SUCCESS:
      return {
        services: action.services,
        isFetching: false,
        error: ''
      };
    case SERVICES_FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case SERVICES_FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default services;