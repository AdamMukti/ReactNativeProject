import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeText from '../assets/style/ThemeText';
import ThemeColor from '../assets/style/ThemeColor';
import Style from '../assets/style/Styles';
import StatusComponents from '../components/StatusComponents';

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
        <Text style={ThemeText.textHeading}>Biodata</Text>
        <DetailInfoComponent title={'Nama'} value={mhs.nama} />
        <DetailInfoComponent title={'NPM'} value={mhs.nim} />
        <DetailInfoComponent title={'Nomor HP'} value={mhs.noHp} />
        <DetailInfoComponent title={'Email'} value={mhs.user.email} />
        <DetailInfoComponent
          title={'Program Studi'}
          value={mhs.programStudi.name}
        />
        <View style={{marginTop: 12}}>
          <Text style={[ThemeText.textMuted, {marginBottom: 4}]}>
            Status Mahasiswa
          </Text>
          <StatusComponents status={mhs.statusMahasiswa.id} />
        </View>
      </View>
    </View>
  );
};

const DetailInfoComponent = ({title, value}) => {
  return (
    <View style={{marginTop: 12}}>
      <Text style={ThemeText.textMuted}>{title}</Text>
      <Text style={ThemeText.textTitle}>{value !== '' ? value : '-'}</Text>
    </View>
  );
};

export default DetailMahasiswa;

const styles = StyleSheet.create({});
