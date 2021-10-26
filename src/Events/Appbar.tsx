import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Appbar as PapperAppbar} from 'react-native-paper';
import Animated, {BounceIn} from 'react-native-reanimated';
import MateriaCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const PADDING = 10;

const Appbar = () => {
  return (
    <View style={styles.appbarContainer}>
      <PapperAppbar.Header style={styles.appbar}>
        <PapperAppbar.Action icon={'chevron-left'} color={'#fff'} />
        <View style={styles.content}>
          <Animated.View entering={BounceIn.delay(300)} style={styles.icon}>
            <MateriaCommunity name="heart-outline" size={23} color={'#fff'} />
          </Animated.View>
        </View>
      </PapperAppbar.Header>
    </View>
  );
};

export default Appbar;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appbarContainer: {
    position: 'absolute',
  },
  appbar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width,
    alignItems: 'center',
    elevation: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: PADDING * 1.3,
  },
  content: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  icon: {
    backgroundColor: '#21267b',
    height: 35,
    width: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
