import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  filterCheckbox: {
    flex: 1,
    paddingLeft: (deviceWidth * 3.2) / 100,
    paddingBottom: (deviceWidth * 10) / 100,
  },
  rightText: {
    paddingLeft: (deviceWidth * 0.3) / 100,
    fontSize: 18,
    letterSpacing: -0.24,
    lineHeight: 20,
  },
})
