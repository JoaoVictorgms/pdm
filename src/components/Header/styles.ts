import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 175,
    position: 'relative',
    
  },
  form: {
    position: 'absolute',
    bottom: -52 / 2,
    height: 52,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 52,
    width: '75%',
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 20,
    color: theme.colors.base.gray100,
    padding: 16,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_family.regular,
    marginRight: 4,
    borderColor: theme.colors.base.gray500,
    borderWidth: 1,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: theme.font_size.md,
    fontFamily: theme.font_family.bold,
    color: theme.colors.base.gray100,

  },
  
});
