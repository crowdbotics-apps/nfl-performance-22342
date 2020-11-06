import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {List} from 'react-native-ui-kitten';
import {
  TrainingCard2,
  TrainingCardProps,
} from '../components/trainings/trainingCard2.component';

class Hard1Component extends React.Component {
  onTrainingDetails = (index) => {
    this.props.onTrainingDetails(index);
  };

  renderCard = info => {
    return (
      <TrainingCard2
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

export const Hard1 = withStyles(Hard1Component, theme => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
}));
