import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import FilterItem from './components/FilterItem'
import { toggleSelectedCategory } from '../../redux/actions'
import Header from '../../components/Header'

const Filter = ({ categories, selectedCategories, toggleCategory, navigation }) => {
  const extendedCategories = categories.map(c => ({
    ...c,
    isShown: selectedCategories.find(sc => sc.id === c.id),
  }))
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('FilterResults')}>
        <Text>Show Results</Text>
      </TouchableOpacity>
      <ScrollView>
        {extendedCategories.map(c => (
          <FilterItem category={c} key={c.id} onClick={toggleCategory} />
        ))}
      </ScrollView>
    </View>
  )
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Filter.navigationOptions = () => ({
  header: () => <Header text="Filter" />,
})

const connectedFilter = connect(
  state => ({
    categories: state.categories,
    selectedCategories: state.selectedCategories,
  }),
  {
    toggleCategory: toggleSelectedCategory,
  }
)(Filter)

export default connectedFilter
