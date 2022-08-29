import { ApolloProvider } from '@apollo/client'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { Home } from './src/screens/Home'
import { client } from './src/services'
import store from './src/store'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaView style={styles.AndroidSafeArea}>
          <Home />
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#1F1E25',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
