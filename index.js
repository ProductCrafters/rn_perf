import { AppRegistry } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/navigator'
import store from './src/redux/store'
import { name as appName } from './app.json'

const AppContainer = props => (
  <Provider store={store}>
    <Navigator {...props} />
  </Provider>
)

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => AppContainer)
