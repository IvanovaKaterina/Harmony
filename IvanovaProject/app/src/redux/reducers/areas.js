// -------------- ACTION TYPE --------------
const AREAS_FETCH_DATA_SUCCESS = 'AREAS_FETCH_DATA_SUCCESS';
const AREAS_FETCHING_DATA = 'AREAS_FETCHING_DATA';
const AREAS_FETCH_DATA_FAILED = 'AREAS_FETCH_DATA_FAILED';

const defaultState = {
  areas: [],
  isFetching: false,
  error: ''
};

// -------------- ACTION CREATOR --------------
export const areasFetchData = (url) => (dispatch) => {
  dispatch({ type: AREAS_FETCHING_DATA });
  fetch(url)
  .then(response => {
    if(!response.ok) {
      throw new Error (response.statusText)
    }
    return response;
  })
  .then(response => response.json())
  .then(areas => dispatch({ type: AREAS_FETCH_DATA_SUCCESS, areas }))
}

// -------------- REDUCER --------------
function areas(state = defaultState, action) {
  switch (action.type) {
    case AREAS_FETCH_DATA_SUCCESS:
      return {
        areas: action.areas,
        isFetching: false,
        error: ''
      };
    case AREAS_FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case AREAS_FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default areas;