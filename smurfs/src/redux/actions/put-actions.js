import axios from "axios";

export const SMURF_PUT_START = "SMURF_PUT_START";
export const SMURF_PUT_SUCCESS = "SMURF_PUT_SUCCESS";
export const SMURF_PUT_FAILURE = "SMURF_PUT_FAILURE";

export const putSmurf = value => dispatch => {
  dispatch({ type: SMURF_PUT_START, payload: value });
  console.log(`putSmurf: `, value);
  axios
    .post(`http://localhost:3333/smurfs`, value)
    .then(res => {
      console.log(`redux: post-actions: axios: then: res.data: `, res);
      dispatch({
        type: SMURF_PUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SMURF_PUT_FAILURE,
        payload: "error posting data"
      });
    });
};
