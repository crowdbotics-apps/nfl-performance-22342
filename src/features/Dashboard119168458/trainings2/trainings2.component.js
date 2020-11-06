import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {ListRenderItemInfo} from 'react-native';
import {List} from 'react-native-ui-kitten';
import {
  TrainingCard3,
  TrainingCardProps,
} from '../components/trainings/trainingCard3.component';

class Trainings2Component extends React.Component {
  onTrainingDetails = (index) => {
    this.props.onTrainingDetails(index);
  };

  onTrainingTiming = (index) => {
    this.props.onTrainingTiming(index);
  };

  onTrainingEnergy = (index) => {
    this.props.onTrainingEnergy(index);
  };

  renderCard = (
    info,
  ) => {
    return (
      <TrainingCard3
        style={this.props.themedStyle.item}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
        onTiming={this.onTrainingTiming}
        onEnergy={this.onTrainingEnergy}
      />
    );
  };

  render() {
    const {themedStyle, exercises} = this.props;

    return (
      <List
        contentContainerStyle={themedStyle.container}
        data={exercises}
        renderItem={this.renderCard}
      />
    );
  }
}

export const Trainings2 = withStyles(
  Trainings2Component,
  (theme) => ({
    container: {
      paddingVertical: 8,
    },
    item: {
      marginVertical: 8,
      backgroundColor: theme['background-basic-color-1'],
    },
  }),
);
