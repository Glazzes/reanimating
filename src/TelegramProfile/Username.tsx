import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {Caption} from 'react-native-paper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {QUARTER, THIRD} from './TelegramProfile';

const PADDING = 10;

type UsernameProps = {
  fabSize: Animated.SharedValue<number>;
  translateY: Animated.SharedValue<number>;
};

const Username: React.FC<UsernameProps> = ({fabSize, translateY}) => {
  const usernameSize = useSharedValue<number>(0);

  const angle = useDerivedValue<number>(() => {
    if (translateY.value <= -THIRD) {
      return withTiming(Math.PI * 2);
    }

    return withTiming((3 * Math.PI) / 2);
  });

  const rStyles = useAnimatedStyle(() => {
    const baseTop =
      width - usernameSize.value - fabSize.value / 4 + PADDING / 2;

    const topInterpolation = interpolate(
      translateY.value,
      [-THIRD, 0, QUARTER],
      [-THIRD, 0, QUARTER],
      Extrapolate.CLAMP,
    );

    const angleReducer = Math.sin(angle.value) * QUARTER;

    return {
      top: baseTop + topInterpolation - QUARTER - angleReducer,
      left: Math.cos(angle.value) * QUARTER,
    };
  });

  return (
    <Animated.View
      style={[styles.usernameContainer, rStyles]}
      onLayout={e => {
        usernameSize.value = e.nativeEvent.layout.height;
      }}>
      <Text style={styles.username}>Glazzes</Text>
      <Caption style={styles.status}>Online</Caption>
    </Animated.View>
  );
};

export default Username;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  usernameContainer: {
    position: 'absolute',
    paddingLeft: PADDING / 2,
  },
  username: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    letterSpacing: 1,
    paddingLeft: PADDING,
  },
  status: {
    color: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: PADDING,
    fontSize: 13,
  },
});
