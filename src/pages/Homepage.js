import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ThemeText from '../assets/style/ThemeText';
import Styles from '../assets/style/Styles';
import ThemeColor from '../assets/style/ThemeColor';
// import arrowRightWhite from '../assets/icon/arrow_right_dark.png';

const Homepage = () => {
  return (
    <View style={Styles.bg_dark}>
      <View style={Styles.container}>
        <Text style={[ThemeText.textMuted, style.welcomeText]}>
          Halo, Selamat datang di
        </Text>
        <Text style={[ThemeText.textHeading, style.textHeading]}>
          SISTEM INFORMASI MANAJEMEN TUGAS AKHIR
        </Text>
        <View style={[style.hero, {flexDirection: 'row'}]}>
          <View style={{padding: 24}}>
            <Text style={ThemeText.textTitle}>Mahasiswa</Text>
            <Text style={[ThemeText.textHeading, {fontSize: 48}]}>1232</Text>
          </View>
          <Image
            source={require('../assets/icon/arrowRightLight.png')}
            style={{position: 'absolute', bottom: 24, right: 24}}
          />
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const style = StyleSheet.create({
  welcomeText: {
    marginBottom: 12,
  },
  textHeading: {
    marginBottom: 24,
  },
  hero: {
    backgroundColor: ThemeColor.primary,
    height: 150,
    borderRadius: 20,
  },
});
