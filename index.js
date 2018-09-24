import { AppRegistry } from 'react-native'
import React from 'react'
import App from './src/components/App'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { name as appName } from './app.json'

const AppContainer = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer)
