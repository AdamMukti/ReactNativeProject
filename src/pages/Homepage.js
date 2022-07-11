import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import ThemeText from '../assets/style/ThemeText';
import Styles from '../assets/style/Styles';
import ThemeColor from '../assets/style/ThemeColor';
// import arrowRightWhite from '../assets/icon/arrow_right_dark.png';

const Homepage = ({navigation}) => {
  return (
    <View style={Styles.bg_dark}>
      <View style={Styles.container}>
        <Text style={[ThemeText.textMuted, style.welcomeText]}>
          Halo, Selamat datang di
        </Text>
        <Text style={[ThemeText.textHeading, style.textHeading]}>
          SISTEM INFORMASI MANAJEMEN TUGAS AKHIR
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mahasiswa')}>
          <View style={[style.hero, {flexDirection: 'row'}]}>
            <View style={{padding: 24}}>
              <Text style={ThemeText.textTitle}>Mahasiswa</Text>
              <Text style={[ThemeText.textHeading, {fontSize: 48}]}>204</Text>
            </View>
            <Image
              source={require('../assets/icon/arrowRightLight.png')}
              style={{position: 'absolute', bottom: 24, right: 24}}
            />
          </View>
        </TouchableOpacity>
        <View style={style.menuWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotFoundPage')}
            style={[{backgroundColor: '#FFF5E9'}, style.menu]}>
            <Text style={[ThemeText.textTitle, {color: '#D9C0AB'}]}>Dosen</Text>
            <Text
              style={[ThemeText.textHeading, {color: '#D29B74', fontSize: 36}]}>
              123
            </Text>
            <Image
              source={require('../assets/icon/arrowRightDark.png')}
              style={{position: 'absolute', bottom: 24, right: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotFoundPage')}
            style={[{backgroundColor: '#EBFAFF'}, style.menu]}>
            <Text style={[ThemeText.textTitle, {color: '#B6D2D8'}]}>
              Proposal
            </Text>
            <Text
              style={[ThemeText.textHeading, {color: '#5DABC1', fontSize: 36}]}>
              123
            </Text>
            <Image
              source={require('../assets/icon/arrowRightDark.png')}
              style={{position: 'absolute', bottom: 24, right: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotFoundPage')}
            style={[{backgroundColor: '#F7F4FF'}, style.menu]}>
            <Text style={[ThemeText.textTitle, {color: '#BEB3CE'}]}>
              Kolokium
            </Text>
            <Text
              style={[ThemeText.textHeading, {color: '#9073B4', fontSize: 36}]}>
              123
            </Text>
            <Image
              source={require('../assets/icon/arrowRightDark.png')}
              style={{position: 'absolute', bottom: 24, right: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotFoundPage')}
            style={[{backgroundColor: '#F4FFFB'}, style.menu]}>
            <Text style={[ThemeText.textTitle, {color: '#B6D0C5'}]}>
              Yudisium
            </Text>
            <Text
              style={[ThemeText.textHeading, {color: '#6FABA1', fontSize: 36}]}>
              123
            </Text>
            <Image
              source={require('../assets/icon/arrowRightDark.png')}
              style={{position: 'absolute', bottom: 24, right: 24}}
            />
          </TouchableOpacity>
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
    marginBottom: 24,
    // shadowColor: '#51C3FF',
    // elevation: 5,
  },
  menuWrapper: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  menu: {
    height: 170,
    width: '45%',
    borderRadius: 20,
    marginBottom: 24,
    padding: 24,
    position: 'relative',
  },
});
