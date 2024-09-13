/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
const typography = {
  DINProBlack:'DINPro-Black',
  DINProBlackItalic:'DINPro-BlackItalic',
  DINProBold: 'DINPro-Bold',
  DINProBoldItalic: 'DINPro-BoldItalic',
  DINProCond:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedRegular'
      : 'DINPro-Cond',
  DINProCondBlack:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedBlack'
      : 'DINPro-CondBlack',
  DINProCondBlackIta:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedBlackItalic'
      : 'DINPro-CondBlackIta',
  DINProCondBold:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedBold'
      : 'DINPro-CondBold',
  DINProCondBoldIta:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedBoldItalic'
      : 'DINPro-CondBoldIta',
  DINProCondIta:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedItalic'
      : 'DINPro-CondIta',
  DINProCondLight:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedLight'
      : 'DINPro-CondLight',
  DINProCondLightIta:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedLightItalic'
      : 'DINPro-CondLightIta',
  DINProCondMediIta:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedMediumItalic'
      : 'DINPro-CondMediIta',
  DINProCondMedium:
    Platform.OS === 'ios'
      ? 'DINPro-CondensedMedium'
      : 'DINPro-CondMedium',
  DINProItalic: 'DINPro-Italic',
  DINProLight: 'DINPro-Light',
  DINProLightItalic: 'DINPro-LightItalic',
  DINProMedium: 'DINPro-Medium',
  DINProMediumIta: 'DINPro-MediumItalic',
  DINPro: 'DINPro',
};

export default typography;
