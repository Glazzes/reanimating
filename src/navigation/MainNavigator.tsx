import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerScreenParams} from './DrawerScreenParams';
import GoogleConfig from '../GoogleConfig/GoogleConfig';
import DrawerContent from './DrawerContent';
import {TelegramProfile} from '../TelegramProfile';
import Albums from '../Albums/Albums';

const Drawer = createDrawerNavigator<DrawerScreenParams>();

const MainNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Stories"
      drawerContent={({navigation}: {navigation: any}) => (
        <DrawerContent navigation={navigation} />
      )}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Drawer.Screen name="GoogleConfig" component={GoogleConfig} />
      <Drawer.Screen name="TelegramProfile" component={TelegramProfile} />
      <Drawer.Screen name="Stories" component={Albums} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
