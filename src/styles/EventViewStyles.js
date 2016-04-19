import {StyleSheet} from 'react-native'
import {GENERAL_FONT} from '../styles/ColorConstants'

const styles = StyleSheet.create({
  logoImage: {
    width: 176,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  eventName: {
    flex: 1,
    alignSelf: 'center',
    color: GENERAL_FONT,
    marginBottom: 15
  },
  eventDesc: {
    flex: 1,
    color: GENERAL_FONT
  },
  times: {
    marginTop: 25,
    textAlign: 'center',
    color: GENERAL_FONT
  },
  locateButton: {
    marginTop: 50,
    marginBottom: 25,
    alignSelf: 'center'
  },
  locateText: {
    textAlign: 'center',
    color: GENERAL_FONT
  }
})

export default styles
