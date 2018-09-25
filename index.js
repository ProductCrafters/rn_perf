import { AppRegistry } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Filter from './src/Screens/Filter'
import store from './src/redux/store'
import { name as appName } from './app.json'

const AppContainer = props => (
  <Provider store={store}>
    <Filter {...props} />
  </Provider>
)

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => AppContainer)
