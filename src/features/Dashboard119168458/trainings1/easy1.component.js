import React from 'react';
import {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
  StyleType,
} from 'react-native-ui-kitten';
import {
  TrainingCard1,
  TrainingCardProps,
} from '../components/trainings/trainingCard.component';
import {
  List,
  Text,
} from 'react-native-ui-kitten';
import { textStyle } from '../components/common';

class Easy1Component extends React.Component{

   state = {
    selectedExerciseIndex: 0,
  };

   onExerciseListScroll = (event) => {
    const { themedStyle } = this.props;

    const { x } = event.nativeEvent.contentOffset;
    const { width } = themedStyle.pagerCard;

    const selectedExerciseIndex = Math.round(xOffset / itemWidth);

    if (selectedExerciseIndex !== this.state.selectedExerciseIndex) {
      this.setState({ selectedExerciseIndex });
    }
  };

   onTrainingDetails = (index) => {
    this.props.onTrainingDetails(index);
  };

   renderPagerIndicator = (index) => {
    const { themedStyle, exercises } = this.props;
    const additionalStyle = index === this.state.selectedExerciseIndex ?
      themedStyle.pagerIndicatorSelected : null;
    const marginStyle = index === exercises.length - 1 ?
      null : themedStyle.indicatorMarginRight;

    return (
      <View
        style={[themedStyle.pagerIndicator, additionalStyle, marginStyle]}
        key={index}
      />
    );
  };

   renderPagerCard = (info) => {
    const { themedStyle, exercises } = this.props;

    const marginStyle: StyleType = info.index === exercises.length - 1 ?
      null : themedStyle.pagerCardMargin;

    return (
      <TrainingCard1
        index={info.index}
        style={[themedStyle.pagerCard, marginStyle]}
        training={info.item}
        onDetails={this.onTrainingDetails}
      />
    );
  };

   renderPager = () => {
    const { themedStyle } = this.props;

    return (
      <View>
        <List
          style={themedStyle.pagerContainer}
          horizontal={true}
          renderItem={this.renderPagerCard}
          data={this.props.exercises}
          showsHorizontalScrollIndicator={false}
          onScroll={this.onExerciseListScroll}
        />
        <View style={themedStyle.pagerIndicatorContainer}>
          {this.props.exercises
               .map((item, i) => this.renderPagerIndicator(i))}
        </View>
      </View>
    );
  };

   renderListCard = (info) => {
    return (
      <TrainingCard1
        style={this.props.themedStyle.listCard}
        training={info.item}
        index={info.index}
        onDetails={this.onTrainingDetails}
      />
    );
  };

   render(){
    const { themedStyle, exercises } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}
      >
        {/* <Text
          style={themedStyle.pagerLabel}
          appearance='hint'>
          MOST POPULAR
        </Text>
        {this.renderPager()} */}
        <List
          data={exercises}
          renderItem={this.renderListCard}
        />
      </ScrollView>
    );
  }
}

export const Easy1 = withStyles(Easy1Component, (theme) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pagerContainer: {
    marginVertical: 8,
  },
  pagerLabel: {
    marginVertical: 16,
    ...textStyle.paragraph,
  },
  pagerCard: {
    width: 226,
  },
  listCard: {
    marginVertical: 8,
  },
  pagerCardMargin: {
    marginRight: 16,
  },
  pagerIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  pagerIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme['background-basic-color-3'],
  },
  pagerIndicatorSelected: {
    backgroundColor: theme['background-basic-color-4'],
  },
  indicatorMarginRight: {
    marginRight: 12,
  },
}));
