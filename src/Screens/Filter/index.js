import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import FilterItem from './components/FilterItem'
import { toggleSelectedCategory } from '../../redux/actions'

const Filter = ({ categories, selectedCategories, toggleCategory }) => {
  const extendedCategories = categories.map(c => ({
    ...c,
    isShown: selectedCategories.find(sc => sc.id === c.id),
  }))
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={extendedCategories}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <FilterItem category={item} key={item.id} onClick={toggleCategory} />
        )}
      />
    </View>
  )
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}


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
