import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Appbar as PaperAppbar} from 'react-native-paper';

const Appbar = () => {
  return (
    <PaperAppbar.Header style={styles.appbar}>
      <PaperAppbar.Action icon="chevron-left" color={'black'} />
      <View style={styles.content}>
        <Image source={require('./assets/pfp.png')} style={styles.image} />
      </View>
    </PaperAppbar.Header>
  );
};

export default Appbar;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'transparent',
    width,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});
