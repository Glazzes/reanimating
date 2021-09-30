import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  withTiming,
} from 'react-native-reanimated';

type TestingProps = {
  translateY: Animated.SharedValue<number>;
};

const Testing: React.FC<TestingProps> = ({translateY}) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: e => {
      translateY.value = e.translationY;
    },
    onEnd: e => {
      translateY.value = withTiming(0);
    },
  });

  return (
    <View style={styles.root}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={styles.box} />
      </PanGestureHandler>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'salmon',
  },
});
