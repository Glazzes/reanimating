import React, {useRef} from 'react';
import Appbar from './Appbar';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import UserInfo from './UserInfo';
import Content from './Content';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';
import {StyleSheet} from 'react-native';

const GoogleConfig: React.FC = () => {
  const translateY = useSharedValue<number>(0);
  const scrollY = useSharedValue<number>(0);

  const panRef = useRef();

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {y: number}
  >({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({translationY}, ctx) => {
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({velocityY}) => {
      const snap = snapPoint(translateY.value, velocityY, [-100, 0]);
      translateY.value = withTiming(snap);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} ref={panRef}>
      <Animated.View style={styles.root}>
        <Appbar translateY={translateY} />
        <UserInfo translateY={translateY} />
        <Content scrollY={scrollY} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default GoogleConfig;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
