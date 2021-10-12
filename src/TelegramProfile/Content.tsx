import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import {Item, settings} from './data';

const Content = () => {
  return (
    <View>
      <View style={styles.section}>
        {settings.map((setting: Item, index: number) => {
          return <Setting setting={setting} key={`setting-${index}`} />;
        })}
      </View>
    </View>
  );
};

const Setting: React.FC<{setting: Item}> = ({setting}) => {
  return (
    <View style={styles.item}>
      <MaterialDesign name={setting.icon} />
      <Text style={styles.settingText}>{setting.title}</Text>
    </View>
  );
};

export default Content;

const SPACING = 5;
const styles = StyleSheet.create({
  section: {
    marginVertical: SPACING,
  },
  item: {
    flexDirection: 'row',
  },
  settingText: {
    color: 'white',
    fontSize: 15,
  },
});
