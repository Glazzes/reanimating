import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Appbar as PapperAppbar, IconButton} from 'react-native-paper';

const Appbar = () => {
  return (
    <View style={styles.root}>
      <PapperAppbar.Header style={styles.appbar}>
        <PapperAppbar.BackAction color={'white'} onPress={() => {}} />
        <View style={styles.container}>
          <IconButton
            icon={'dots-vertical'}
            color={'white'}
            style={styles.icon}
            onPress={() => {}}
          />
        </View>
      </PapperAppbar.Header>
    </View>
  );
};

export default Appbar;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    zIndex: 10000,
    position: 'absolute',
    width,
    top: 0,
    left: 0,
  },
  appbar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  container: {
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-end',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});
