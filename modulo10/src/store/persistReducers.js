import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user']
    },
    reducers
  )
  return persistedReducer
}
