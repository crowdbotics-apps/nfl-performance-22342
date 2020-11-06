import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageProps,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon
} from 'react-native-ui-kitten';
import {
  Button,
  Text,
} from 'react-native-ui-kitten';
import { textStyle } from '../common';

const FlashIconOutline = 'flash-outline'
const ClockIconOutline = 'clock-outline'

class TrainingCard3Component extends React.Component{

   onDetails = () => {
    this.props.onDetails(this.props.index);
  };

   onTiming = () => {
    this.props.onTiming(this.props.index);
  };

   onEnergy = () => {
    this.props.onEnergy(this.props.index);
  };

   renderTimingIcon = () => {
    const { themedStyle } = this.props;

    return <Icon {...themedStyle} name='clock-outline' />
  };

   renderEnergyIcon = () => {
    const { themedStyle } = this.props;

    return <Icon {...themedStyle} name='flash-outline' /> 
  };

   render() {
    const { themedStyle, training, style } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={this.onDetails}
        style={style}>
        <ImageBackground
          style={themedStyle.image}
          source={training.image.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <Text
            style={themedStyle.titleLabel}
            category='h5'>
            {training.name}
          </Text>
          <View style={themedStyle.controlsContainer}>
            <Button
              style={themedStyle.timingButton}
              textStyle={themedStyle.controlButtonText}
              appearance='ghost'
              icon={this.renderTimingIcon}
              onPress={this.onTiming}>
              {training.duration}
            </Button>
            <Button
              textStyle={themedStyle.controlButtonText}
              appearance='ghost'
              icon={this.renderEnergyIcon}
              onPress={this.onEnergy}>
              {training.energy}
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const TrainingCard3 = withStyles(TrainingCard3Component, (theme: ThemeType) => ({
  image: {
    minHeight: 160,
  },
  infoContainer: {
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  titleLabel: {
    marginHorizontal: 18,
    ...textStyle.headline,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: theme['text-hint-color'],
    ...textStyle.button,
  },
  timingButton: {
    marginLeft: 8,
  },
  timingIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-primary-default'],
  },
  energyIcon: {
    width: 20,
    height: 20,
    tintColor: theme['color-danger-default'],
  },
}));
