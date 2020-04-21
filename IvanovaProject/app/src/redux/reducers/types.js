// -------------- ACTION TYPE --------------
const TYPES_FETCH_DATA_SUCCESS = 'TYPES_FETCH_DATA_SUCCESS';
const TYPES_FETCHING_DATA = 'TYPES_FETCHING_DATA';
const TYPES_FETCH_DATA_FAILED = 'TYPES_FETCH_DATA_FAILED';

const defaultState = {
  types: [],
  isFetching: false,
  error: ''
};

// -------------- ACTION CREATOR --------------
export const typesFetchData = (url) => (dispatch) => {
  dispatch({ type: TYPES_FETCHING_DATA });
  fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error (response.statusText)
    }
    return response;
  })
  .then(response => response.json())
  .then(types => dispatch({ type: TYPES_FETCH_DATA_SUCCESS, types }))
 }

// -------------- REDUCER --------------
function types(state = defaultState, action) {
  switch (action.type) {
    case TYPES_FETCH_DATA_SUCCESS:
      return {
        types: action.types,
        isFetching: false,
        error: ''
      };
    case TYPES_FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case TYPES_FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default types;