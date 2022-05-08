import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
  },

  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
    marginBottom: 24,
  },

  image: {
    width: 36,
    height: 36,
    marginTop: 46,
    marginBottom: 10,
  },

  button: {
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderr: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 56,
  },

  buttonTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_primary,
  },

});