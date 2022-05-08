import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    marginVertical: 16,
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24
  },

  image: {
    width: 24,
    height: 24,
    marginRight:8
  },

  titleText: {
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_secondary
  },

  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular
  },

  footer: {
    flexDirection: 'row',
    marginBottom: 16
  }

});