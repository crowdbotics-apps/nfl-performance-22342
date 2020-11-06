import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Trainings2} from './trainings2.component';
import {exercises2} from '../data/exercise';
import {connect} from 'react-redux';
import * as ExerciseActions from '../redux/actions';

class Trainings2Container extends React.Component {
  static navigationOptions = {
    title: 'Dashboard 2'.toUpperCase(),
  };

  state = {
    exercises: exercises2,
  };

  onTrainingDetails = index => {};

  onTrainingTiming = index => {};

  onTrainingEnergy = index => {};

  componentDidMount(){
    const { getExercises } = this.props

    getExercises({})
  }

  render() {
    const exercises = this.props.exercises && this.props.exercises.length > 0 ? this.props.exercises : this.state.exercises

    return (
      <Trainings2
        exercises={exercises}
        onTrainingDetails={this.onTrainingDetails}
        onTrainingTiming={this.onTrainingTiming}
        onTrainingEnergy={this.onTrainingEnergy}
      />
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.Dashboard2Blueprint.exercises,
});

const mapDispatchToProps = {
  getExercises: ExerciseActions.getExercises
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trainings2Container);