import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import UserInfo from './UserInfo';
import Content from './Content';
import {StyleSheet, View} from 'react-native';

const GoogleConfig: React.FC = () => {
  const translateY = useSharedValue<number>(0);

  return (
    <View style={styles.root}>
      <UserInfo translateY={translateY} />
      <Content translateY={translateY} />
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
