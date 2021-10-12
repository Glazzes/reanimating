import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {HEIGHT_REDUCER, QUARTER, THIRD} from './TelegramProfile';

type ProfileImageProps = {
  translateY: Animated.SharedValue<number>;
};

const FOX = require('./assets/fox.jpg');
const {width} = Dimensions.get('window');

const ProfileImage: React.FC<ProfileImageProps> = ({translateY}) => {
  const containerStyles = useAnimatedStyle(() => {
    const height = interpolate(
      translateY.value,
      [-150, 0, 80],
      [width - 150, width, width + 80],
      Extrapolate.CLAMP,
    );

    const elevation = translateY.value <= -110 ? 1 : 0;

    return {height, elevation};
  });

  const tresholdHeight = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(HEIGHT_REDUCER);
    }

    return withTiming(0);
  });

  const tresholdWidth = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(width / 4);
    }

    return withTiming(width);
  }, []);

  const borderRadius = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(tresholdWidth.value / 2, {duration: 100});
    }

    return withTiming(0);
  });

  const imageStyles = useAnimatedStyle(() => {
    const height = interpolate(
      translateY.value,
      [-THIRD, 0, QUARTER],
      [width - THIRD, width, width + QUARTER],
      Extrapolate.CLAMP,
    );

    const reducer = interpolate(
      translateY.value,
      [-150, -110],
      [35, 0],
      Extrapolate.CLAMP,
    );

    const ty = interpolate(
      translateY.value,
      [-110, -150],
      [0, 72],
      Extrapolate.CLAMP,
    );

    return {
      height: height - tresholdHeight.value - reducer,
      width: tresholdWidth.value - reducer,
      borderRadius: borderRadius.value - reducer / 2,
      transform: [{translateY: ty}],
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyles]}>
      <Animated.Image source={FOX} style={imageStyles} />
    </Animated.View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#17212b',
  },
});
