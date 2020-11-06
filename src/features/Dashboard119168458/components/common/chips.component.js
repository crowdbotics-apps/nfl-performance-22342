import React from 'react';
import {View, TextProps, ImageProps, ViewProps} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
} from 'react-native-ui-kitten';

class ChipsComponent extends React.Component {
  renderIcon = () => {
    const {icon, themedStyle} = this.props;

    return <Icon name={icon} {...themedStyle.icon} />;
  };

  render() {
    const {themedStyle, children, style} = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        {this.renderIcon()}
        {children}
      </View>
    );
  }
}

export const Chips = withStyles(ChipsComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: theme['color-primary-default'],
    borderRadius: 100,
  },
  icon: {
    width: 13,
    height: 13,
    tintColor: 'white',
  },
}));
