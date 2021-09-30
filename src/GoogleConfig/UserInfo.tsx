import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {PADDING, IMAGE_MAX_SIZE, IMAGE_MIN_SIZE} from './GoogleConfig';

const MAGNUM_BULLETS = require('./assets/bullets.png');

type UserInfoProps = {
  translateY: Animated.SharedValue<number>;
};

const UserInfo: React.FC<UserInfoProps> = ({translateY}) => {
  const {width} = useWindowDimensions();

  const rImageStyles = useAnimatedStyle(() => {
    const size = interpolate(
      translateY.value,
      [0, 100],
      [IMAGE_MAX_SIZE, IMAGE_MIN_SIZE + PADDING],
      Extrapolate.CLAMP,
    );

    const tx = interpolate(
      translateY.value,
      [0, 100],
      [0, width / 2 - size / 2 - PADDING],
      Extrapolate.CLAMP,
    );

    const ty = interpolate(
      translateY.value,
      [0, 100],
      [0, -47.5],
      Extrapolate.CLAMP,
    );

    return {
      zIndex: 200,
      width: size,
      height: size,
      borderRadius: size / 2,
      transform: [{translateX: tx}, {translateY: ty}],
    };
  });

  return (
    <View style={styles.root}>
      <Animated.Image source={MAGNUM_BULLETS} style={rImageStyles} />
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  root: {
    paddingBottom: PADDING,
    paddingHorizontal: PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontWeight: '500',
    fontSize: 30,
  },
});
