import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Header from '../../components/Header'

const FilterResults = ({ selectedCategories }) => {
  return <View />
}

FilterResults.navigationOptions = () => ({
  header: () => <Header text="Filter Results" />,
})

FilterResults.propTypes = {
  selectedCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FilterResults.defaultProps = {
  selectedCategories: [],
}

export default FilterResults
