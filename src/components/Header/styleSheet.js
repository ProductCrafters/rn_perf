import { StyleSheet, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  headerTitle: {
    paddingTop: (deviceHeight * 5) / 100,
    fontSize: 28,
    textAlign: 'center',
    letterSpacing: -0.68,
    lineHeight: 22,
  },
})
