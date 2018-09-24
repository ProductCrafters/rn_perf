import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styleSheet from './styleSheet'

const Header = ({ text }) => (
  <View style={styleSheet.headerContainer}>
    <Text style={styleSheet.headerTitle}>{text}</Text>
  </View>
)

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

Header.defaultProps = {
  text: 'Header',
}

export default Header
