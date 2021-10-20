import React from 'react';
import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {DrawerScreenParams} from './DrawerScreenParams';

type DrawerContentProps = {
  navigation: DrawerNavigationProp<DrawerScreenParams>;
};

const DrawerContent: React.FC<DrawerContentProps> = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      <Drawer.Item
        label="Google Configuration"
        onPress={() => navigation.navigate('GoogleConfig')}
      />
      <Drawer.Item
        label={'Telegram profile'}
        onPress={() => navigation.navigate('TelegramProfile')}
      />

      <Drawer.Item
        label={'Stories'}
        onPress={() => navigation.navigate('Stories')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
