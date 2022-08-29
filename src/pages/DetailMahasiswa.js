import {Text, View} from 'react-native';
import React from 'react';
import ThemeText from '../assets/style/ThemeText';
import Style from '../assets/style/Styles';

const DetailMahasiswa = ({route, navigation}) => {
  const {mhs} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: '#ffffff',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#252F3A',
      },
    });
  }, [navigation]);
  return (
    <View style={Style.bg_dark}>
      <View style={Style.container}>
        <Text style={ThemeText.textHeading}>Proposal Skripsi</Text>
        <DetailInfoComponent title={'Nama'} value={mhs.nama} />
        <DetailInfoComponent title={'NPM'} value={mhs.npm} />
        <DetailInfoComponent
          title={'Dosen Pembimbing '}
          value={mhs.pembimbing_proposal}
        />
        <DetailInfoComponent
          title={'Judul Proposal'}
          value={mhs.judul_proposal}
        />
      </View>
    </View>
  );
};

const DetailInfoComponent = ({title, value}) => {
  return (
    <View style={{marginTop: 12}}>
      <Text style={ThemeText.textMuted}>{title}</Text>
      <Text style={[ThemeText.textTitle, {lineHeight: 26}]}>
        {value !== '' ? value : '-'}
      </Text>
    </View>
  );
};

export default DetailMahasiswa;
