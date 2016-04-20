import {StyleSheet} from 'react-native'
import {NAV_BAR_FONT, BORDER} from '../styles/ColorConstants'
import {NAV_BAR_SIZE} from '../styles/StyleConstants'

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NAV_BAR_SIZE,
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: BORDER,
    borderBottomWidth: 5
  },
  navbarText: {
    color: NAV_BAR_FONT,
    fontSize: 17,
    margin: 10,
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'center'
  },
  corner: {
    flex: 1,
    justifyContent: 'center'
  },
  alignLeft: {
    alignItems: 'flex-start'
  },
  alignRight: {
    alignItems: 'flex-end'
  },
  navBarButtons: {
    marginRight: 10
  },
  title: {
    overflow: 'hidden',
    flex: 3
  }
})

export default styles
