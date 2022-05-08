import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create ({
  container: {
    width: 104,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    pading: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme.colors.surface_secondary
  },

  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary,
    marginTop: 8,
  },

  image: {
    width: 40,
    height: 40,
  },
});