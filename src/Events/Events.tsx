import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Appbar from './Appbar';
import Event from './Event';
import {EventScreenParams} from './navigation/EventScreenParams';

type EventsProp = {
  navigation: StackNavigationProp<EventScreenParams, 'Events'>;
};

const Events: React.FC<EventsProp> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={[styles.events, styles.eventText]}>Events</Text>
          <Text style={[styles.events, styles.organizers]}>Organizers</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.lastEvents}>Last Results</Text>
        <Event navigation={navigation} />
      </View>
      <SharedElement id="appbar">
        <Appbar />
      </SharedElement>
    </View>
  );
};

export default Events;

const {height, width} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.45;
const SPACING = 10;
const BRADIUS = 20;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    backgroundColor: '#abe2f7',
    height: ITEM_HEIGHT,
    width,
    borderBottomLeftRadius: BRADIUS + 10,
    borderBottomRightRadius: BRADIUS + 10,
  },
  buttonContainer: {
    backgroundColor: 'white',
    width: width * 0.9,
    padding: SPACING / 2,
    borderColor: 'white',
    flexDirection: 'row',
    borderRadius: BRADIUS * 2,
    justifyContent: 'center',
    position: 'absolute',
    left: width * 0.05,
    top: ITEM_HEIGHT - SPACING * 3.5,
    elevation: 3,
  },
  events: {
    fontFamily: 'SF-Pro-Text-Bold',
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: SPACING * 1.5,
    paddingHorizontal: SPACING * 2,
    borderRadius: BRADIUS * 2,
    width: width * 0.43,
  },
  eventText: {
    backgroundColor: '#20267b',
    color: 'white',
  },
  organizers: {
    backgroundColor: 'white',
    color: '#8c8cdb',
  },
  infoContainer: {
    flex: 1,
    paddingTop: SPACING * 6,
    paddingHorizontal: width * 0.05,
  },
  lastEvents: {
    fontSize: 22,
  },
});
