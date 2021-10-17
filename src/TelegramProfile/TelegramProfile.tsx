import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Appbar from './Appbar';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ProfileImage from './ProfileImage';
import Content from './Content';

const {width} = Dimensions.get('window');
export const PADDING = 10;
export const QUARTER = width / 4;
export const THIRD = width * 0.34375;
export const HEIGHT_REDUCER = width * 0.40625;

const TelegramProfile: React.FC = () => {
  const translateY = useSharedValue<number>(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {y: number}
  >({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.y + event.translationY;
    },
    onEnd: _ => {
      if (translateY.value < -THIRD) {
        translateY.value = withTiming(-THIRD);
      }

      if (translateY.value > -THIRD) {
        translateY.value = withTiming(0);
      }
    },
  });

  return (
    <View style={styles.root}>
      <Appbar />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View>
          <ProfileImage translateY={translateY} />
          <Content />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default TelegramProfile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0e1621',
  },
  image: {
    width,
    height: width,
  },
});
