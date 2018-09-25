import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import FilterItem from './components/FilterItem'
import { toggleSelectedCategory } from '../../redux/actions'

const Filter = ({ categories, selectedCategories, toggleCategory }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={categories}
        extraData={selectedCategories}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <FilterItem
            category={item}
            isShown={!!selectedCategories.find(sc => sc.id === item.id)}
            key={item.id}
            onClick={toggleCategory}
          />
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
