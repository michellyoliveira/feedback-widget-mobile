import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  title: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.text_on_brand_color,
  }

});