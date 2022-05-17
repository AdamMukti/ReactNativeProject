import {StyleSheet} from 'react-native';
import ThemeColor from './ThemeColor';

export default StyleSheet.create({
  textHeading: {
    fontSize: 24,
    fontWeight: '700',
    color: ThemeColor.white,
  },
  textStatus: {
    fontSize: 18,
    fontWeight: '700',
    color: ThemeColor.dark,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColor.white,
  },
  textMuted: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColor.secondary,
  },
});
