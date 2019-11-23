import axios from "axios";

// export const GET = "GET";
export const SMURF_LOAD_START = "SMURF_LOAD_START";
export const SMURF_LOAD_SUCCESS = "SMURF_LOAD_SUCCESS";
export const SMURF_LOAD_FAILURE = "SMURF_LOAD_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_LOAD_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      //   console.log(`actions: get-actions: axios.then: res.data: `, res.data);
      dispatch({
        type: SMURF_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      //   console.log(`actions: get-actions: axios.catch: err: `, err);
      dispatch({
        type: SMURF_LOAD_FAILURE,
        payload: "error loading smurfs"
      });
    });
};
