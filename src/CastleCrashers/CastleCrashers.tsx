import React from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {Text, Title} from 'react-native-paper';
import Animated, {
  SlideInUp,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Appbar from './Appbar';
import {knights} from './knights';
import SVG, {Path, Rect} from 'react-native-svg';

const CastleCrashers = () => {
  const size = useSharedValue<number>(50);

  const onTap = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onActive: _ => {
      size.value = withTiming(Math.min(width, height) * 2, {duration: 500});
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      width: size.value,
      height: size.value,
      borderRadius: size.value / 2,
      backgroundColor: '#8ed032',
    };
  });

  return (
    <View style={styles.root}>
      <Animated.View entering={SlideInUp.delay(300)}>
        <Appbar />
      </Animated.View>
      <View style={styles.knightNameBox}>
        {knights.map(knight => {
          return (
            <Title key={knight.name} style={styles.knightName}>
              {knight.name}
            </Title>
          );
        })}
      </View>
      <View style={{flex: 1, width, position: 'relative'}}>
        <View style={styles.attributeContainer}>
          {knights.map(knight => {
            return (
              <Text key={knight.attribute} style={styles.attribute}>
                {knight.attribute}
              </Text>
            );
          })}
        </View>
        <Image
          source={require('./assets/green_knight.png')}
          resizeMode={'cover'}
          style={{height: undefined, width: undefined, flex: 1}}
        />
        <View style={styles.starContainer}>
          <CommunityIcons name="star" color={'black'} size={25} />
          <Text style={styles.score}>{knights[0].star}</Text>
        </View>
      </View>
      <SVG width={width} height={80}>
        <Path
          d={`M 0 0, h ${width}, v 80, h ${-width}, v 0 Z`}
          fill={'black'}
        />
        <Rect
          fill={'#fff'}
          height={5}
          width={width * 0.4}
          x={width * 0.3}
          y={65}
        />
      </SVG>
    </View>
  );
};

export default CastleCrashers;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#8ed032',
  },
  knightNameBox: {
    width: width * 0.6,
    height: 65,
    overflow: 'hidden',
    marginLeft: 20,
  },
  knightName: {
    fontFamily: 'SF-Pro-Text-Bold',
    color: 'black',
    fontSize: 30,
  },
  attributeContainer: {
    marginLeft: 20,
    overflow: 'hidden',
    width: width * 0.6,
    height: 20,
    position: 'absolute',
  },
  attribute: {
    fontFamily: 'SF-Pro-Text-Bold',
    color: 'black',
    fontWeight: 'bold',
  },
  starContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 60,
    width: 45,
    position: 'absolute',
    top: 40,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
