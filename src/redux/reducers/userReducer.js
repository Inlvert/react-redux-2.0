import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoaging: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isLoaging: true,
      };
    }
    case ACTION_TYPES.CREATE_USER_SECCESS: {
      const { payload: newUser } = action;
      return {
        ...state,
        isLoaging: false,
        users: [...state.users, newUser]
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { payload: error } = action;
      return {
        ...state,
        isLoaging: false,
        error
      };
    }
    default:
      return state;
  }
}

export default userReducer;
