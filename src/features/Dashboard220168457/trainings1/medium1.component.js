import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from 'react-native-ui-kitten';
import {List} from 'react-native-ui-kitten';
import {
  TrainingCard1,
  TrainingCardProps,
} from '../components/trainings/trainingCard.component';

class Medium1Component extends React.Component {
  onTrainingDetails = index => {
    this.props.onTrainingDetails(index);
  };

  renderCard = info => {
    return (
      <TrainingCard1
        style={this.props.themedStyle.card}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
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

export const Medium1 = withStyles(Medium1Component, theme => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
}));
