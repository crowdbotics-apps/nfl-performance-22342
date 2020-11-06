import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Trainings2} from './trainings2.component';
import {exercises2} from '../data/exercise';

export class Trainings2Container extends React.Component {
  static navigationOptions = {
    title: 'Dashboard 2'.toUpperCase(),
  };

  state = {
    exercises: exercises2,
  };

  onTrainingDetails = index => {};

  onTrainingTiming = index => {};

  onTrainingEnergy = index => {};

  render() {
    return (
      <Trainings2
        exercises={this.state.exercises}
        onTrainingDetails={this.onTrainingDetails}
        onTrainingTiming={this.onTrainingTiming}
        onTrainingEnergy={this.onTrainingEnergy}
      />
    );
  }
}
