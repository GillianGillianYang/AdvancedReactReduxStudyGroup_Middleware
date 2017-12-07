import { FETCH_USERS } from '../actions/type';


export default (state = [], action) => {
  const actionType = action.type;

  if (actionType === FETCH_USERS) {
    return [
      ...state,
      ...action.payload.data
    ];
  }

  return state;
};
