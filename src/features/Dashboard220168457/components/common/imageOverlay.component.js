import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';


class ImageOverlayComponent extends React.Component {

   getOverlayColor = (source) => {
    const { themedStyle } = this.props;

    return source || themedStyle.overlay.backgroundColor;
  };

   render() {
    const { style, themedStyle, children, ...restProps } = this.props;
    // @ts-ignore: overlayColor (additional style property)
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

    const overlayColor = this.getOverlayColor(derivedOverlayColor);

    return (
      <ImageBackground
        style={containerStyle}
        {...restProps}>
        <View style={[themedStyle.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>
    );
  }
}

export const ImageOverlay = withStyles(ImageOverlayComponent, (theme: ThemeType) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
}));
