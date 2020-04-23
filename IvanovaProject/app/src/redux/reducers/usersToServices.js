// -------------- ACTION TYPE --------------
const USERS_TO_SERVICES_FETCH_DATA_SUCCESS = 'USERS_TO_SERVICES_FETCH_DATA_SUCCESS';
const USERS_TO_SERVICES_FETCHING_DATA = 'USERS_TO_SERVICES_FETCHING_DATA';
const USERS_TO_SERVICES_FETCH_DATA_FAILED = 'USERS_TO_SERVICES_FETCH_DATA_FAILED';

const defaultState = {
  data: [],
  isFetching: false,
  error: ''
};

// -------------- ACTION CREATOR --------------
export const usersToServicesFetchData = (url) => (dispatch) => {
  dispatch({ type: USERS_TO_SERVICES_FETCHING_DATA });
  fetch(url, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify({userId: localStorage.getItem('authUser')})
  })
  .then(response => {
    if(!response.ok) {
      throw new Error (response.statusText)
    }
    return response;
  })
  .then(response => response.json())
  .then(data => dispatch({ type: USERS_TO_SERVICES_FETCH_DATA_SUCCESS, data }))
}

// -------------- REDUCER --------------
function usersToServices(state = defaultState, action) {
  switch (action.type) {
    case USERS_TO_SERVICES_FETCH_DATA_SUCCESS:
      return {
        data: action.data,
        isFetching: false,
        error: ''
      };
    case USERS_TO_SERVICES_FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case USERS_TO_SERVICES_FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default usersToServices;