import {
  SMURF_LOAD_START,
  SMURF_LOAD_SUCCESS,
  SMURF_LOAD_FAILURE
} from "../actions/get-actions";

import {
  SMURF_POST_START,
  SMURF_POST_SUCCESS,
  SMURF_POST_FAILURE
} from "../actions/post-actions";

import {
  SMURF_PUT_START,
  SMURF_PUT_SUCCESS,
  SMURF_PUT_FAILURE
} from "../actions/put-actions";

const initialState = {
  isLoading: false,
  smurfs: []
};

const reducer = (state = initialState, action) => {
  console.log(`redux: reducers: index.js`, state);
  console.log(`redux: reducers: index.js`, action);
  switch (action.type) {
    case SMURF_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_LOAD_SUCCESS:
      //   console.log(
      //     `redux: reducers: index,js: SMURF_LOAD_SUCCESS: action.payload: `,
      //     action.payload
      //   );
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
    case SMURF_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_POST_SUCCESS:
      console.log(
        `redux: reducers: index,js: SMURF_POST_SUCCESS: action.payload: `,
        action.payload
      );
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case SMURF_POST_FAILURE:
      console.log(
        `redux: reducers: index,js: SMURF_POST_FAILURE: action.payload: `,
        action.payload
      );
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case SMURF_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_PUT_SUCCESS:
      console.log(
        `redux: reducers: index,js: SMURF_PUT_SUCCESS: action.payload: `,
        action.payload
      );
      const { payload } = action;
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => {
          if (smurf.id === payload.id) {
            return { ...smurf, payload };
          } else {
            return smurf;
          }
        }),
        isLoading: false
      };
    case SMURF_PUT_FAILURE:
      console.log(
        `redux: reducers: index,js: SMURF_PUT_FAILURE: action.payload: `,
        action.payload
      );
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default reducer;
