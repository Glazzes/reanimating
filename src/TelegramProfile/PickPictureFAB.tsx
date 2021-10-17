import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {PADDING, QUARTER} from './TelegramProfile';

type PickPictureFABProps = {
  translateY: Animated.SharedValue<number>;
  fabSize: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('window');

const PickPictureFAB: React.FC<PickPictureFABProps> = ({
  translateY,
  fabSize,
}) => {
  const fabStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [-width + QUARTER, 0, QUARTER],
      [QUARTER, width, width + QUARTER],
      Extrapolate.CLAMP,
    );

    const left = width - fabSize.value - PADDING * 2;

    const scale =
      -width + (QUARTER + PADDING * 2.5) < translateY.value
        ? withTiming(1)
        : withTiming(0);

    return {
      top: top - fabSize.value / 2,
      left,
      transform: [{scale}],
    };
  });

  return (
    <Animated.View
      style={[styles.root, fabStyles]}
      onLayout={e => {
        fabSize.value = e.nativeEvent.layout.height;
      }}>
      <FAB
        icon={'camera-plus-outline'}
        style={styles.fab}
        color={'white'}
        animated={true}
        onLayout={e => (fabSize.value = e.nativeEvent.layout.width)}
      />
    </Animated.View>
  );
};

export default PickPictureFAB;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    elevation: 0,
    zIndex: 0,
  },
  fab: {
    backgroundColor: '#30a3e6',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
