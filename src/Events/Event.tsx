import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, StyleSheet, Text, View, Pressable} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {EventScreenParams} from './navigation/EventScreenParams';
// @ts-ignore
import Video from 'react-native-video';

type EventProp = {
  navigation: StackNavigationProp<EventScreenParams, 'Events'>;
};

const Event: React.FC<EventProp> = ({navigation}) => {
  return (
    <View style={styles.event}>
      <View style={styles.date}>
        <Text style={styles.day}>Sun</Text>
        <Text style={styles.number}>08</Text>
      </View>
      <View style={styles.eventInfoContainer}>
        <SharedElement id="video" style={styles.video}>
          <Video
            source={require('./assets/birds.mp4')}
            muted={true}
            controls={false}
            posterresizeMode={'cover'}
            resizeMode={'cover'}
            paused={true}
          />
        </SharedElement>
        <View style={styles.information}>
          <SharedElement id="title">
            <Text style={styles.eventTitle} adjustsFontSizeToFit>
              Starbound OST appreciation
            </Text>
          </SharedElement>
          <SharedElement id="location">
            <Text style={styles.location}>520 8th Avenue</Text>
          </SharedElement>
        </View>
      </View>
    </View>
  );
};

export default Event;

const {width} = Dimensions.get('window');
const SPACING = 10;
const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    marginTop: SPACING,
  },
  date: {
    flexDirection: 'column',
  },
  day: {
    color: '#8c8cdb',
    fontWeight: 'bold',
  },
  number: {
    color: '#fd6360',
    fontSize: 20,
    fontWeight: 'bold',
  },
  video: {
    width: 55,
    height: 90,
    borderRadius: 18,
    marginRight: SPACING,
  },
  eventInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: SPACING * 2,
    paddingVertical: SPACING,
    marginLeft: SPACING,
    paddingLeft: SPACING,
    elevation: 1,
  },
  information: {
    flex: 1,
    paddingHorizontal: SPACING,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 15,
    flexShrink: 1,
    fontFamily: 'SF-Pro-Text-Bold',
    marginBottom: SPACING,
  },
  location: {
    color: 'grey',
    flexShrink: 1,
    fontFamily: 'SF-Pro-Text-Regular',
  },
});
