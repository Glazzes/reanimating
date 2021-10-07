import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Testring = () => {
  const ty = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(ty.value, [0, 100], [1, 0.5], Extrapolate.CLAMP);

    return {
      transform: [{scaleY: height}],
      height: 400,
      width: 400,
      backgroundColor: 'salmon',
    };
  });

  const onGesture = useAnimatedScrollHandler({
    onScroll: e => (ty.value = e.contentOffset.y),
  });

  return (
    <View style={styles.root}>
      <Animated.View>
        <Animated.View style={animatedStyle} />
        <Animated.ScrollView
          onScroll={onGesture}
          contentContainerStyle={styles.container}
        />
      </Animated.View>
    </View>
  );
};

export default Testring;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    height: 1000,
    width: '100%',
    backgroundColor: 'lime',
  },
});
