import { combineReducers, configureStore } from '@reduxjs/toolkit'
import charactersData from './modules/character/reducer'

const rootReducers = combineReducers({
  characters: charactersData,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store
export type RootState = ReturnType<typeof store.getState>
