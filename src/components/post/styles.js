import { StyleSheet } from 'react-native';

import { baseSpace, borderRadius, colors } from '~/styles/variables';

export default StyleSheet.create({
  author: {
    color: colors.neutralMid,
  },
  container: {
    backgroundColor: colors.neutralLightest,
    borderRadius,
    marginBottom: baseSpace,
    padding: baseSpace,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: colors.neutralMid,
    marginBottom: baseSpace,
    paddingBottom: baseSpace,
  },
  title: {
    color: colors.neutralDarkest,
    fontWeight: 'bold',
  },
});
