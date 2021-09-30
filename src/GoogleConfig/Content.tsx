import React, {useState} from 'react';
import {RefreshControl, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

const Content: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    setInterval(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.test}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['lightblue']}
        />
      }>
      <Text>Hello Glazes</Text>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  test: {
    width: '100%',
    height: 1000,
  },
});
