import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {AlbumData} from './data';

type AlbumProps = {
  album: AlbumData;
  index: number;
  scrollX: Animated.SharedValue<number>;
};

const {width} = Dimensions.get('window');
const PADDING = 10;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = width * 1.15;

const Album: React.FC<AlbumProps> = ({index, scrollX, album}) => {
  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [index - 2, index - 1, index, index + 1],
      [90, 50, 0, -width * 1.5],
      {extrapolateRight: Extrapolate.CLAMP},
    );

    const scale = interpolate(
      scrollX.value,
      [index - 1, index, index + 1],
      [0.85, 1, 1.3],
      {extrapolateRight: Extrapolate.CLAMP},
    );

    const opacity = interpolate(scrollX.value, [index - 3, index - 2], [0, 1]);

    return {transform: [{translateX}, {scale}], opacity};
  });

  return (
    <Animated.View style={[rStyle, styles.imageContainer]}>
      <ImageBackground
        source={album.image}
        resizeMode={'cover'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.albumTitle}>{album.title}</Text>
            <Text style={styles.tooltip}>Listen</Text>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default Album;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    left: -ITEM_WIDTH / 1.55,
    borderRadius: 20,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    maxWidth: ITEM_WIDTH,
    paddingVertical: PADDING * 2,
    paddingHorizontal: PADDING,
  },
  albumTitle: {
    color: 'white',
    fontFamily: 'SF-Pro-Text-Bold',
    fontSize: 18,
    paddingBottom: PADDING / 2,
  },
  tooltip: {
    backgroundColor: '#497dc6',
    paddingVertical: PADDING / 2,
    paddingHorizontal: PADDING,
    borderRadius: PADDING * 2,
    color: 'white',
    fontFamily: 'SF-Pro-Text-Bold',
    maxWidth: ITEM_WIDTH * 0.4,
    textAlign: 'center',
  },
});
