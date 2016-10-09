import {StyleSheet} from 'react-native'
import {GENERAL_FONT, ERROR_FONT} from '../styles/ColorConstants'

const styles = StyleSheet.create({
  logoImage: {
    width: 176,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  eventName: {
    alignSelf: 'center',
    color: GENERAL_FONT,
    marginBottom: 20
  },
  eventDesc: {
    alignSelf: 'center',
    color: GENERAL_FONT
  },
  times: {
    marginTop: 25,
    textAlign: 'center',
    color: GENERAL_FONT
  },
  locateButton: {
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center'
  },
  locateText: {
    textAlign: 'center',
    color: GENERAL_FONT
  },
  errorMessage: {
    textAlign: 'center',
    color: ERROR_FONT
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default styles
