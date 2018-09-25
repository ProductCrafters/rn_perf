import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import CheckBox from 'react-native-check-box'
import styleSheet from './stylesheet'

class FilterItem extends PureComponent {
  render() {
    const { category, isShown, onClick } = this.props
    console.log(isShown)
    return (
      <View style={{ flex: 1 }}>
        <CheckBox
          onClick={() => onClick(category)}
          isChecked={isShown}
          style={styleSheet.filterCheckbox}
          rightText={category.name}
          rightTextStyle={styleSheet.rightText}
        />
      </View>
    )
  }
}

FilterItem.propTypes = {
  category: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterItem
