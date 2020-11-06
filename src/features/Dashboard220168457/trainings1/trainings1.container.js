import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Trainings1} from './trainings1.component';
import {exercises1} from '../data/exercise';

export class Trainings1Container extends React.Component {
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

  render() {
    return (
      <Trainings1
        levels={this.levels}
        exercises={this.state.exercises}
        selectedLevelIndex={this.state.selectedLevelIndex}
        onTrainingDetails={this.onTrainingDetails}
        onSelectLevel={this.onSelectLevel}
      />
    );
  }
}
