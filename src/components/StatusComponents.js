import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeText from '../assets/style/ThemeText';
import ThemeColor from '../assets/style/ThemeColor';

const StatusComponents = ({status}) => {
  return (
    <View style={style.statusWrapper}>
      <Text style={ThemeText.textStatus}>{status}</Text>
    </View>
  );
};

export default StatusComponents;

const style = StyleSheet.create({
  statusWrapper: {
    height: 36,
    width: 36,
    backgroundColor: ThemeColor.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
