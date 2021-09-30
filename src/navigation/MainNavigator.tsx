import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerScreenParams} from './DrawerScreenParams';
import GoogleConfig from '../GoogleConfig/GoogleConfig';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator<DrawerScreenParams>();

const MainNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="GoogleConfig"
      drawerContent={({navigation}: {navigation: any}) => (
        <DrawerContent navigation={navigation} />
      )}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Drawer.Screen name="GoogleConfig" component={GoogleConfig} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
