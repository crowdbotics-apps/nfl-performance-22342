import * as actions from './constants';

const initialState = {
  exercises: [],
  errors: {getExercises: null}
};

export default Dashboard2BlueprintReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DASHBOARD2_GET_EXERCISE_SUCCESS:
      return {...state, exercises: action.exercises};
    case actions.DASHBOARD2_GET_EXERCISE_ERROR:
      return {...state, errors: {getExercises: action.error}};
    default:
      return state;
  }
};
