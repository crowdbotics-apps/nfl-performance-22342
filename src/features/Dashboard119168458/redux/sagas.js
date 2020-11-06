import {all, takeLatest, put, call} from 'redux-saga/effects';
import * as NavigationService from '../../../navigator/NavigationService';
import * as actions from './constants';
import {request} from '../../../utils/http';
import {
  imageExercise1Bg,
  imageExercise2Bg,
  imageExercise3Bg,
  imageExercise4Bg,
  imageExercise5Bg,
  imageExercise6Bg,
  imageExercise7Bg,
} from '../assets/images';

function getImage(i) {
  let image = imageExercise1Bg;
  switch (i % 7) {
    case 0:
      image = imageExercise1Bg;
      break;
    case 1:
      image = imageExercise2Bg;
      break;
    case 2:
      image = imageExercise3Bg;
      break;
    case 3:
      image = imageExercise4Bg;
      break;
    case 4:
      image = imageExercise5Bg;
      break;
    case 5:
      image = imageExercise6Bg;
      break;
    case 6:
      image = imageExercise7Bg;
      break;
    default:
      image = imageExercise1Bg;
  }
  return image;
}

function sendGetExercise() {
  return request.get('/api/v1/exercise/');
}

function* handleGetExercise(action) {
  try {
    const {status, data} = yield call(sendGetExercise);

    if (status === 200) {
      const exercises = Array.isArray(data)
        ? data.map((item, i) => {
            return {
              name: item.name,
              image: getImage(i),
              duration: item.duration,
              level: item.level,
              energy: item.energy,
            };
          })
        : [];

      yield put({
        type: actions.DASHBOARD_GET_EXERCISE_SUCCESS,
        exercises: exercises,
      });
    } else {
      yield put({
        type: actions.DASHBOARD_GET_EXERCISE_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: actions.DASHBOARD_GET_EXERCISE_ERROR,
      error: error,
    });
  }
}

export default all([
  takeLatest(actions.DASHBOARD_GET_EXERCISE_REQUEST, handleGetExercise),
]);
