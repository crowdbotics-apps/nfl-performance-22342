import React from 'react';
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
} from 'react-native-ui-kitten';
import {Text} from 'react-native-ui-kitten';
import {Chips, ImageOverlay, textStyle} from '../common';

const ClockIconOutline = 'clock-outline';

class TrainingCardComponent extends React.Component {
  onDetails = () => {
    this.props.onDetails(this.props.index);
  };

  render() {
    const {themedStyle, training, style} = this.props;

    return (
      <TouchableOpacity activeOpacity={0.95} onPress={this.onDetails}>
        <ImageOverlay
          style={[themedStyle.container, style]}
          source={training.image.imageSource}>
          <View>
            <Text style={themedStyle.levelLabel} appearance="hint">
              {`${training.level} Level`}
            </Text>
            <Text style={themedStyle.titleLabel} category="h5">
              {training.name}
            </Text>
          </View>
          <Chips style={themedStyle.chips} icon={ClockIconOutline}>
            <Text style={themedStyle.chipsText} category="c2">
              {training.duration}
            </Text>
          </Chips>
        </ImageOverlay>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard1 = withStyles(TrainingCardComponent, theme => ({
  container: {
    height: 200,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  levelLabel: {
    color: 'white',
    ...textStyle.subtitle,
  },
  titleLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  chips: {
    width: 80,
  },
  chipsText: {
    color: 'white',
    ...textStyle.caption2,
  },
}));
