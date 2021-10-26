import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import {
  FlingGestureHandlerGestureEvent,
  ScrollView,
  State,
} from 'react-native-gesture-handler';
import {
  Directions,
  FlatList,
  FlingGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Appbar from './Appbar';
import {albums, AlbumData} from './data';
import Album from './Album';
import Header from './Header';

const PADDING = 10;

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = width * 1.15;

const Albums = () => {
  const scrollX = useSharedValue<number>(0);

  const onLeftSwipe =
    useAnimatedGestureHandler<FlingGestureHandlerGestureEvent>({
      onActive: _ => {
        if (scrollX.value < albums.length) {
          const newValue = Math.floor(scrollX.value + 1);
          scrollX.value = withSpring(newValue);
        }
      },
    });

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2d3447', '#1b1e44']}
        style={StyleSheet.absoluteFill}
      />
      <Appbar />
      <Header
        title={'Trending'}
        subtitle={'25+ albums'}
        tooltip={'Chillhop essentials'}
        tooltipColor={'#FF6e6e'}
      />
      <FlingGestureHandler
        key={'left-swipe'}
        direction={Directions.LEFT}
        onGestureEvent={onLeftSwipe}>
        <Animated.View style={styles.gestureContainer}>
          <FlingGestureHandler
            key={'right-swipe'}
            direction={Directions.RIGHT}
            onHandlerStateChange={e => {
              if (e.nativeEvent.state === State.END) {
                if (scrollX.value > 0) {
                  const newValue = Math.floor(scrollX.value - 1);
                  scrollX.value = withSpring(newValue);
                }
              }
            }}>
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={albums}
              contentContainerStyle={styles.container}
              keyExtractor={(_, index) => `story-${index}`}
              CellRendererComponent={({index, style, children, ...props}) => {
                const newStyle = [style, {elevation: albums.length - index}];

                return (
                  <View style={newStyle} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({item, index}: {item: AlbumData; index: number}) => {
                return <Album album={item} index={index} scrollX={scrollX} />;
              }}
            />
          </FlingGestureHandler>
        </Animated.View>
      </FlingGestureHandler>
      <Header
        title={'Favourites'}
        subtitle={'10+ albums'}
        tooltip={'Lofi beats'}
        tooltipColor={'#497dc6'}
      />
      <Image source={albums[5].image} style={styles.lastImage} />
    </ScrollView>
  );
};

export default Albums;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: PADDING,
  },
  gestureContainer: {
    width,
    height: ITEM_HEIGHT + PADDING * 2,
  },
  lastImage: {
    borderRadius: 20,
    marginHorizontal: PADDING * 1.7,
    marginVertical: PADDING,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH / 1.5,
  },
});
