import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {PADDING, QUARTER, THIRD} from './TelegramProfile';

type PickPictureFABProps = {
  translateY: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('window');

const PickPictureFAB: React.FC<PickPictureFABProps> = ({translateY}) => {
  const fabSize = useSharedValue<number>(0);
  const fabStyles = useAnimatedStyle(() => {
    const top = interpolate(
      translateY.value,
      [-THIRD, 0, QUARTER],
      [width - THIRD, width, width + QUARTER],
      Extrapolate.CLAMP,
    );
    const left = width - fabSize.value - PADDING;

    return {top: top - fabSize.value / 2, left};
  });

  return (
    <Animated.View style={[styles.root, fabStyles]}>
      <FAB
        icon={'camera-plus'}
        style={styles.fab}
        color={'white'}
        onLayout={e => (fabSize.value = e.nativeEvent.layout.width)}
      />
    </Animated.View>
  );
};

export default PickPictureFAB;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 400,
  },
  fab: {
    backgroundColor: '#30a3e6',
  },
});
