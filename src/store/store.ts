import { Action, combineReducers, configureStore, createStore, ThunkAction, applyMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import newsReducer from './slice/articleSlice'

//@ts-ignore
const makeConfiguredStore = reducer => createStore(reducer, undefined, applyMiddleware())

const reducers = combineReducers({
  news: newsReducer
})

const persistConfig = {
  key: 'foxnews',
  whitelist: ['news'],
  storage
}
const persistedReducer = persistReducer(persistConfig, reducers)

const makeStore = () => {
  let store
  const isServer = typeof window === 'undefined'
  if (isServer) {
    store = makeConfiguredStore(newsReducer)
  } else {
    store = configureStore({
      reducer: persistedReducer,
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false
        }),
      devTools: true
    })
    //@ts-ignore
    store.__persistor = persistStore(store)
  }
  return store
}

export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
