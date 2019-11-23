import axios from axios;

export const POST = "POST";
export const SMURF_POST_START = "SMURF_POST_START";
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS";
export const SMURF_POST_FAILURE = "SMURF_POST_FAILURE";

export const postSmurf = (value) => dispatch => {
    dispatch({ type: SMURF_POST_START, payload: value });
    console.log(`hello`);
    axios
      .post(
        `/smurfs`, value
      )
      .then(res => {
        console.log(
          `redux: async-actions: axios: res.data.response.results: `,
          res.data.response.results
        );
        dispatch({
          type: SMURF_POST_SUCCESS,
          payload: res.data.response.results
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: SMURF_POST_FAILURE,
          payload: "error posting data"
        });
      });
  };