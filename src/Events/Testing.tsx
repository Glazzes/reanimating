import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {SharedElement} from 'react-navigation-shared-element';
import {EventScreenParams} from './navigation/EventScreenParams';
import Video from 'react-native-video';

type FirstProps = {
  navigation: StackNavigationProp<EventScreenParams, 'Events'>;
};

export const First: React.FC<FirstProps> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <SharedElement id="text" style={{width: 200, height: 50}}>
        <Video
          source={require('./assets/birds.m4v')}
          style={{width: 100, height: 100}}
          controls={false}
          poserResizeMode={'cover'}
          resizeMode={'cover'}
          paused={false}
          repeat={true}
          volume={0}
        />
      </SharedElement>

      <Button onPress={() => navigation.navigate('Details', {id: 'sos'})}>
        Go to second
      </Button>
    </View>
  );
};

export const Second = () => {
  return (
    <View style={styles.rootTwo}>
      <SharedElement id="text" style={{width: 350, height: 50}}>
        <Text style={styles.textTwo}>Hello world</Text>
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textOne: {
    fontSize: 15,
    alignContent: 'flex-start',
  },
  rootTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTwo: {
    fontSize: 30,
    alignContent: 'flex-start',
  },
});
