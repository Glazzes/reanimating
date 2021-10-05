import React, {useState} from 'react';
import {RefreshControl, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-paper';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';

const PADDING: number = 10;
const IMAGE_MAX_SIZE: number = 80;
const IMAGE_MIN_SIZE: number = 20;

const services = [
  'Anuncios',
  'Autocompletar',
  'Configuracion para apps de Google',
  'Configurar y restaurar',
  'Datos moviles y mensajeria',
  'Dispositivos y uso compartido',
  'Encontrar mi dispositivo',
  'Personalizar mediante datos compartidos',
];

const googleColors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

type ContentProps = {
  scrollY: Animated.SharedValue<number>;
};

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const Content: React.FC<ContentProps> = ({scrollY}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = -e.contentOffset.y;
    },
  });

  return (
    <AnimatedScrollView
      onScroll={onScroll}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={googleColors}
        />
      }>
      <Divider />
      <View>
        <View style={styles.infoBox}>
          <Text style={styles.info}>Informacion relacionada con El</Text>
        </View>
        <View style={styles.coronaInfo}>
          <View style={styles.corona}>
            <Icon name={'virus'} color={googleColors[1]} size={30} />
          </View>
          <View>
            <Text style={styles.notification}>
              Notificaciones de exposicion al COVID-19
            </Text>
            <Text style={styles.no}>No</Text>
          </View>
        </View>
        <Divider />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Sericios en este dispositivo</Text>
      </View>
      {services.map((service, index) => (
        <TouchableRipple
          style={styles.serviceBox}
          key={`service-${index}`}
          onPress={() => {}}>
          <Text style={styles.service}>{service}</Text>
        </TouchableRipple>
      ))}
      <Divider />
      <View style={styles.serviceBox}>
        <Text style={styles.info}>Programador</Text>
      </View>
      <View style={styles.serviceBox}>
        <Text style={styles.service}>Firebase app indexing</Text>
      </View>
    </AnimatedScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  serviceBox: {
    paddingHorizontal: IMAGE_MAX_SIZE - PADDING / 2,
    paddingRight: IMAGE_MIN_SIZE,
    paddingVertical: PADDING * 2,
  },
  service: {
    fontSize: 15,
    fontWeight: '800',
    color: 'black',
  },
  infoBox: {
    paddingLeft: IMAGE_MAX_SIZE - PADDING / 2,
    paddingRight: IMAGE_MIN_SIZE,
    paddingVertical: PADDING,
  },
  info: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  coronaInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: IMAGE_MAX_SIZE,
  },
  corona: {
    width: IMAGE_MAX_SIZE,
    height: IMAGE_MAX_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    fontSize: 15,
  },
  no: {color: 'grey'},
});
