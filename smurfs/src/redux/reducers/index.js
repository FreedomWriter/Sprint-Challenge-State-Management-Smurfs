export const initialState = {
  smurfs: []
};

const reducer = (state = initialState, action) => {
  console.log(`redux: reducers: index.js`, state);
  console.log(`redux: reducers: index.js`, action);
  switch (action.type) {
  }
};

export default reducer;
