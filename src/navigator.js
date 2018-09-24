import { createStackNavigator } from 'react-navigation'
import Filter from './Screens/Filter'
import FilterResults from './Screens/FilterResults'

const navigator = createStackNavigator(
  {
    Filter,
    FilterResults
  },
  {
    initialRouteName: 'Filter',
  }
)

export default navigator
