import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import maitenance from '../assets/image/maintenance.png';
import Styles from '../assets/style/Styles';
import ThemeText from '../assets/style/ThemeText';

const NotFoundPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  return (
    <View style={Styles.bg_dark}>
      <View style={[Styles.container, {justifyContent: 'center', flex: 1}]}>
        <Image source={maitenance} style={{width: '100%'}} />
        <Text
          style={[ThemeText.textTitle, {fontSize: 24, textAlign: 'center'}]}>
          Halaman ini masih dalam pengembangan
        </Text>
      </View>
    </View>
  );
};

export default NotFoundPage;

const styles = StyleSheet.create({});
