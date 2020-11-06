import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Trainings1} from './trainings1.component';
import {exercises1} from '../data/exercise';
import {connect} from 'react-redux';
import * as ExerciseActions from '../redux/actions';

class Trainings1Container extends React.Component {
  static navigationOptions = {
    title: 'Dashboard 1'.toUpperCase(),
  };

  state = {
    selectedLevelIndex: 0,
    exercises: exercises1,
  };

  levels= ['EASY', 'MEDIUM', 'HARD'];

  onSelectLevel = index => {
    this.setState({selectedLevelIndex: index});
  };

  onTrainingDetails = index => {};

  componentDidMount(){
    const { getExercises } = this.props

    getExercises({})
  }

  render() {
    const exercises = this.props.exercises && this.props.exercises.length > 0 ? this.props.exercises : this.state.exercises
    return (
      <Trainings1
        levels={this.levels}
        exercises={exercises}
        selectedLevelIndex={this.state.selectedLevelIndex}
        onTrainingDetails={this.onTrainingDetails}
        onSelectLevel={this.onSelectLevel}
      />
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.Dashboard1Blueprint.exercises,
});

const mapDispatchToProps = {
  getExercises: ExerciseActions.getExercises
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trainings1Container);