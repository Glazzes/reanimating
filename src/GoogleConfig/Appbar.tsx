import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar as PaperAppbar, IconButton, Text} from 'react-native-paper';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
} from 'react-native-reanimated';
import {IMAGE_MAX_SIZE} from './GoogleConfig';

const ICON_BOX_WIDTH = 70;

type AppbarProps = {
  scrollY: Animated.SharedValue<number>;
  translateY: Animated.SharedValue<number>;
  isScrolling: Animated.SharedValue<boolean>;
};

const Appbar: React.FC<AppbarProps> = ({scrollY, translateY, isScrolling}) => {
  const appBarContentWidth = useSharedValue<number>(0);

  const rIconBoxStyles = useAnimatedStyle(() => {
    const width = interpolate(
      translateY.value,
      [0, ICON_BOX_WIDTH],
      [ICON_BOX_WIDTH, ICON_BOX_WIDTH + 55],
      Extrapolate.CLAMP,
    );

    return {width};
  });

  const rTextStyles = useAnimatedStyle(() => {
    const width = interpolate(
      translateY.value,
      [0, ICON_BOX_WIDTH],
      [0, ICON_BOX_WIDTH],
      Extrapolate.CLAMP,
    );

    const maxWidth = appBarContentWidth.value - ICON_BOX_WIDTH - width - 10;

    return {maxWidth};
  });

  return (
    <View>
      <PaperAppbar.Header style={styles.appbar}>
        <PaperAppbar.BackAction onPress={() => {}} color={'grey'} />
        <View
          style={styles.appbarContent}
          onLayout={e => {
            appBarContentWidth.value = e.nativeEvent.layout.width;
          }}>
          <Animated.Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={[styles.title, rTextStyles]}>
            Config. de Google
          </Animated.Text>
          <Animated.View style={[styles.iconBox, rIconBoxStyles]}>
            <IconButton
              style={styles.icon}
              icon={'information'}
              color={'grey'}
              onPress={() => {}}
            />
            <IconButton
              style={styles.icon}
              icon={'dots-vertical'}
              color={'grey'}
              onPress={() => {}}
            />
          </Animated.View>
        </View>
      </PaperAppbar.Header>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'white',
    elevation: 0,
    zIndex: 10,
  },
  appbarContent: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    flexGrow: 1,
  },
  iconBox: {
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});
