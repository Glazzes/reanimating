import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Appbar from './Appbar';
import {useSharedValue} from 'react-native-reanimated';
import Testing from './Testing';
import UserInfo from './UserInfo';

export const PADDING = 10;
export const IMAGE_MAX_SIZE = 90;
export const IMAGE_MIN_SIZE = 25;

const GoogleConfig: React.FC = () => {
  const scrollY = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const isScrolling = useSharedValue<boolean>(false);

  return (
    <View style={styles.root}>
      <Appbar
        scrollY={scrollY}
        translateY={translateY}
        isScrolling={isScrolling}
      />
      <UserInfo translateY={translateY} />
      <Testing translateY={translateY} />
    </View>
  );
};

export default GoogleConfig;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
