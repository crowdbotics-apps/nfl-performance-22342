import * as actions from "./constants";

export const getExercises = params => ({
  type: actions.DASHBOARD2_GET_EXERCISE_REQUEST,
  params
});
