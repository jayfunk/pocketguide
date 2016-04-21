import {StyleSheet} from 'react-native'
import {GENERAL_FONT} from '../styles/ColorConstants'

const styles = StyleSheet.create({
  tenImage: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 302,
    width: 207
  },
  sectionHeader: {
    color: GENERAL_FONT,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10
  },
  sectionDefinition: {
    color: GENERAL_FONT,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  }
})

export default styles
