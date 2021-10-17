import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PickPictureFAB from './PickPictureFAB';
import {HEIGHT_REDUCER, QUARTER, THIRD} from './TelegramProfile';
import Username from './Username';

type ProfileImageProps = {
  translateY: Animated.SharedValue<number>;
};

const FOX = require('./assets/fox.jpg');
const {width} = Dimensions.get('window');

const ProfileImage: React.FC<ProfileImageProps> = ({translateY}) => {
  const fabSize = useSharedValue<number>(0);

  const containerStyles = useAnimatedStyle(() => {
    const height = interpolate(
      translateY.value,
      [-width + QUARTER, 0, QUARTER],
      [QUARTER, width, width + QUARTER],
      Extrapolate.CLAMP,
    );

    const elevation = translateY.value <= -THIRD ? 1 : 0;

    return {height, elevation};
  });

  const tresholdHeight = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(HEIGHT_REDUCER);
    }

    return withTiming(0, {duration: 450});
  });

  const tresholdWidth = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(width / 4);
    }

    return withTiming(width, {duration: 250});
  }, []);

  const borderRadius = useDerivedValue(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(tresholdWidth.value / 2, {duration: 100});
    }

    return withTiming(0, {duration: 400});
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
      <PickPictureFAB translateY={translateY} fabSize={fabSize} />
      <Username fabSize={fabSize} translateY={translateY} />
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
