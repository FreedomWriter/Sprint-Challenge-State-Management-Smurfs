import {
  SMURF_LOAD_START,
  SMURF_LOAD_SUCCESS,
  SMURF_LOAD_FAILURE
} from "../actions/get-actions";

export const initialState = {
  smurfs: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  console.log(`redux: reducers: index.js`, state);
  console.log(`redux: reducers: index.js`, action);
  switch (action.type) {
    case SMURF_LOAD_START:
      return {
        ...state,
        smurfs: [action.payload],
        isLoading: true
      };
    case SMURF_LOAD_SUCCESS:
      console.log(
        `redux: reducers: index,js: SMURF_LOAD_SUCCESS: action.payload: `,
        action.payload
      );
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case SMURF_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
  }
};

export default reducer;
