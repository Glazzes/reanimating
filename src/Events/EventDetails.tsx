import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import IonIcos from 'react-native-vector-icons/Ionicons';
import Animated, {BounceIn, FadeIn, ZoomIn} from 'react-native-reanimated';
import {StackNavigationProp} from '@react-navigation/stack';
import {EventScreenParams} from './navigation/EventScreenParams';
import {Text} from 'react-native-paper';
import Appbar from './Appbar';

// @ts-ignore
import Video from 'react-native-video';

type EventDetailsProps = {
  navigation: StackNavigationProp<EventScreenParams, 'Details'>;
};

const STARTTIME = 300;

const EventDetails: React.FC<EventDetailsProps> = ({navigation}) => {
  const [paused, setIsPaused] = useState<boolean>(false);

  return (
    <View style={styles.root}>
      <SharedElement id="appbar">
        <Appbar />
      </SharedElement>
      <View style={styles.imageContainer}>
        <SharedElement id="video" style={styles.imageContainer}>
          <Video
            source={require('./assets/birds.mp4')}
            repeat={true}
            volume={0}
            controls={false}
            resizeMode={'cover'}
            paused={paused}
            style={styles.video}
          />
        </SharedElement>
        <View style={styles.eventInfoContainer}>
          <View style={styles.eventInfo}>
            <Animated.View
              entering={BounceIn.delay(STARTTIME + 100)}
              style={styles.eventDate}>
              <Text style={styles.month}>Nov</Text>
              <Text style={styles.day}>19</Text>
            </Animated.View>
            <View style={styles.titleContainer}>
              <SharedElement id="title">
                <Text style={styles.eventTitle} adjustsFontSizeToFit>
                  Starbound OST appreciation
                </Text>
              </SharedElement>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.secondryInfo}>
              <Animated.View entering={ZoomIn.delay(STARTTIME * 1.5)}>
                <IonIcos
                  name={'location'}
                  size={25}
                  color={'#fd6360'}
                  style={{paddingHorizontal: SPACING / 10}}
                />
              </Animated.View>
              <SharedElement id="location">
                <Text style={styles.location}>520 8th Avenue</Text>
              </SharedElement>
            </View>
            <View style={styles.secondryInfo}>
              <Animated.View entering={ZoomIn.delay(STARTTIME * 2)}>
                <IonIcos
                  name={'time'}
                  size={20}
                  color={'#fd6360'}
                  style={{paddingHorizontal: SPACING / 4}}
                />
              </Animated.View>
              <Animated.Text
                entering={FadeIn.delay(STARTTIME)}
                style={styles.location}>
                8:00 AM - 10:00 PM
              </Animated.Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventDetails;

const {height, width} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.45;
const SPACING = 20;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    height: ITEM_HEIGHT,
    width,
    borderBottomLeftRadius: SPACING + 10,
    borderBottomRightRadius: SPACING + 10,
  },
  video: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderBottomLeftRadius: SPACING + 10,
    borderBottomRightRadius: SPACING + 10,
    elevation: -10,
  },
  icon: {
    backgroundColor: '#0e1621',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfoContainer: {
    borderRadius: SPACING * 1.5,
    padding: SPACING,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    backgroundColor: 'white',
    elevation: 2,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDate: {
    backgroundColor: '#abe2f7',
    borderRadius: SPACING,
    width: width * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING / 2,
  },
  month: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  day: {
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: SPACING / 2,
  },
  eventTitle: {
    fontSize: 17,
    flexShrink: 1,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  location: {
    color: 'grey',
    flexShrink: 1,
    fontFamily: 'SF-Pro-Text-Regular',
  },
  dataContainer: {
    marginTop: SPACING,
  },
  secondryInfo: {
    flexDirection: 'row',
  },
});
