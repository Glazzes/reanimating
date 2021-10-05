import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const MAGNUM_BULLETS = require('./assets/bullets.png');
const GOOGLE = require('./assets/google.png');

const PADDING: number = 10;
const IMAGE_MAX_SIZE: number = 80;
const IMAGE_MIN_SIZE: number = 20;

type UserInfoProps = {
  translateY: Animated.SharedValue<number>;
};

const UserInfo: React.FC<UserInfoProps> = ({translateY}) => {
  const {width} = useWindowDimensions();

  const rImageStyles = useAnimatedStyle(() => {
    const size = interpolate(
      translateY.value,
      [0, -100],
      [IMAGE_MAX_SIZE, IMAGE_MIN_SIZE + PADDING],
      Extrapolate.CLAMP,
    );

    const tx = interpolate(
      translateY.value,
      [0, -100],
      [0, width / 2 - size / 2 - PADDING],
      Extrapolate.CLAMP,
    );

    const ty = interpolate(
      translateY.value,
      [0, -100],
      [0, -45],
      Extrapolate.CLAMP,
    );

    return {
      zIndex: 200,
      width: size,
      height: size,
      borderRadius: size / 2,
      transform: [{translateX: tx}, {translateY: ty}],
    };
  });

  const rUserInfoStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, -75],
      [1, 0],
      Extrapolate.CLAMP,
    );

    const ty = interpolate(
      translateY.value,
      [0, -100],
      [0, -100],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY: ty}],
    };
  });

  return (
    <Animated.View style={[styles.root]}>
      <Animated.Image source={MAGNUM_BULLETS} style={rImageStyles} />
      <Animated.View style={[styles.userInfo, rUserInfoStyles]}>
        <Text style={styles.username}>Centurion</Text>
        <View style={styles.emailbox}>
          <Text style={styles.email}>centurion@gmail.com</Text>
          <Icon name={'chevron-down'} size={20} color="grey" />
        </View>
        <View style={styles.googleBox}>
          <Image source={GOOGLE} style={styles.google} />
          <Text style={styles.infoText}>Administra tu cuenta de google</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  root: {
    paddingBottom: PADDING,
    paddingHorizontal: PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontWeight: '400',
    fontSize: 25,
    textAlign: 'center',
  },
  userInfo: {
    padding: PADDING,
  },
  emailbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: PADDING,
  },
  email: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    marginRight: PADDING,
  },
  googleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    padding: PADDING / 2,
    paddingHorizontal: PADDING,
    borderColor: 'grey',
    borderRadius: PADDING * 2,
  },
  google: {
    width: 20,
    height: 20,
  },
  infoText: {
    marginLeft: PADDING / 2,
    fontWeight: '500',
  },
});
