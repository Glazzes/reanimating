import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import EventDetails from '../EventDetails';
import Events from '../Events';
import {EventScreenParams} from './EventScreenParams';

const Stack = createSharedElementStackNavigator<EventScreenParams>();

const EventsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Events'}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        headerMode: 'screen',
      }}>
      <Stack.Screen name={'Events'} component={Events} />
      <Stack.Screen
        name={'Details'}
        component={EventDetails}
        sharedElements={_ => ['video']}
      />
    </Stack.Navigator>
  );
};

export default EventsNavigator;
