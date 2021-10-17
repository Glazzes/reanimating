import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import MaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SettingItem,
  settings,
  help,
  accountSection,
  AccountSettingItem,
} from './data';

const PADDING = 10;

const Content = () => {
  return (
    <View style={styles.root}>
      <View style={styles.accountSection}>
        <Text style={styles.accountTitle}>Account</Text>
        {accountSection.map((setting: AccountSettingItem, index: number) => {
          return (
            <AccountSetting
              setting={setting}
              key={`account-setting-${index}`}
            />
          );
        })}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {settings.map((setting: SettingItem, index: number) => {
          return <Setting setting={setting} key={`setting-${index}`} />;
        })}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help</Text>
        {help.map((item: SettingItem, index: number) => {
          return <Setting setting={item} key={`help-setting-${index}`} />;
        })}
      </View>
    </View>
  );
};

const Setting: React.FC<{setting: SettingItem}> = ({setting}) => {
  return (
    <View style={styles.item}>
      <MaterialDesign
        style={styles.icon}
        name={setting.icon}
        size={25}
        color={'#d6d6d7'}
      />
      <View style={styles.setting}>
        <Text style={styles.settingText}>{setting.title}</Text>
        <Divider style={styles.divider} />
      </View>
    </View>
  );
};

const AccountSetting: React.FC<{setting: AccountSettingItem}> = ({setting}) => {
  return (
    <View style={styles.accountItem}>
      <Text style={styles.accountItemTitle}>{setting.title}</Text>
      <Text style={styles.accountItemSubtitle}>{setting.subtitle}</Text>
      <Divider style={styles.accountDivider} />
    </View>
  );
};

export default Content;

const SPACING = 5;
const styles = StyleSheet.create({
  root: {
    elevation: -1,
  },
  accountTitle: {
    paddingHorizontal: PADDING,
    fontWeight: 'bold',
    color: '#6ad2f2',
    paddingTop: PADDING * 2,
    paddingBottom: PADDING,
  },
  accountSection: {
    margin: 0,
    backgroundColor: '#17212b',
    paddingHorizontal: PADDING,
    marginBottom: PADDING,
  },
  accountItem: {
    paddingHorizontal: PADDING,
    marginVertical: PADDING / 2,
  },
  accountItemTitle: {
    color: 'white',
    fontSize: 15,
  },
  accountDivider: {
    height: 1,
    backgroundColor: '#0e1621',
  },
  accountItemSubtitle: {
    color: '#838493',
    paddingBottom: PADDING / 2,
  },
  section: {
    marginVertical: SPACING,
    backgroundColor: '#17212b',
  },
  setting: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#6ad2f2',
    paddingLeft: PADDING * 2,
    paddingTop: PADDING * 2,
    paddingBottom: PADDING,
  },
  divider: {
    marginLeft: PADDING,
    height: 1,
    backgroundColor: '#0e1621',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: PADDING / 2,
    paddingLeft: PADDING,
    marginVertical: PADDING / 2,
  },
  icon: {
    paddingHorizontal: PADDING,
    paddingBottom: PADDING,
  },
  settingText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: PADDING,
    paddingBottom: PADDING,
  },
});
