import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Style from '../assets/style/Styles';
import SearchIcon from '../assets/icon/search.png';
import ThemeText from '../assets/style/ThemeText';
import ThemeColor from '../assets/style/ThemeColor';
import StatusComponents from '../components/StatusComponents';

const Mahasiswa = ({navigation}) => {
  let [mahasiswaList, setMahasiswaList] = useState([]);
  let mahasiswa = require('../api/mahasiswa.json');
  useEffect(() => {
    setMahasiswaList(mahasiswa);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: '#ffffff',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#252F3A',
      },
    });
  }, [navigation]);

  const runFilter = keyword => {
    let result;
    if (keyword) {
      const textData = keyword.toLowerCase();
      const filteredData = mahasiswa.filter(function (item) {
        return item.nama.toLowerCase().indexOf(textData) > -1;
      });
      result = filteredData;
    } else {
      result = mahasiswa;
    }
    setMahasiswaList(result);
  };

  const renderListMahasiswa = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailMahasiswa', {
            mhs: item,
          });
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 24,
            marginHorizontal: 18,
          }}>
          <View style={{flex: 1}}>
            <Text style={ThemeText.textTitle}>{item.nama}</Text>
            <Text style={ThemeText.textMuted}>{item.npm}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Style.bg_dark}>
      <View style={Style.container}>
        <View style={style.searchWrapper}>
          <Image source={SearchIcon} style={style.iconStyle} />
          <TextInput
            placeholder="Search mahasiswa"
            placeholderTextColor={ThemeColor.secondary}
            style={style.textSearchStyle}
            onChangeText={text => runFilter(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 24,
            marginHorizontal: 18,
            marginBottom: 24,
          }}>
          <View style={{flex: 1}}>
            <Text style={[ThemeText.textMuted]}>Showing</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={[ThemeText.textMuted]}>
              {mahasiswaList.length} Items
            </Text>
          </View>
        </View>
        <FlatList
          data={mahasiswaList}
          renderItem={renderListMahasiswa}
          keyExtractor={item => item.npm.toString()}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#445A72',
    borderRadius: 20,
    paddingLeft: 24,
  },
  iconStyle: {width: 20, height: 20, marginRight: 12},
  textSearchStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: ThemeColor.secondary,
  },
});

export default Mahasiswa;
