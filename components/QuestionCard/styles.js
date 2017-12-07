import { cerulean, oxfordBlue, white, blueBayoux } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  txtProgress: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 22,
      color: blueBayoux,
      textAlign: 'center',
  },
  buttons: {
      justifyContent: 'flex-end',
      flex: 1
  },
  button: {
      marginBottom: 10,
      backgroundColor: white,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      borderColor: cerulean,
      borderWidth: 2,
      borderRadius: 10,
      marginLeft: 35,
      marginRight: 35,
      alignItems: 'center',
  },
  btnText: {
      color: blueBayoux,
      fontSize: 22,
      textAlign: 'center',
  },
  card: {
      flex: 2,
      justifyContent: 'center'
  }
})
