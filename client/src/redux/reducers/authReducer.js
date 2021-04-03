import ACTIONS from './../actions/actionTypes';

const initialState = {
  user: [],
  isLoggedIn: false,
  isAdmin: false
};

const authReducer = (state = initialState, action) => {
  const { LOGIN, GET_USER } = ACTIONS;

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin
      };
    default:
      return state;
  }
};

export default authReducer;
