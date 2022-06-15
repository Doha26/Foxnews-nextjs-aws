import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { NewsAPIObject, NEWS_API_URL } from '../../utils'
import { HYDRATE } from 'next-redux-wrapper'
import getNews from '../../../lib/getNews'

// declaring the types for our state
export type NewsState = {
  articles: NewsAPIObject[]
  pending: boolean
  error: boolean
  fetched: boolean
  error_code: string
}

const initialState: NewsState = {
  articles: [],
  pending: false,
  error: false,
  fetched: false,
  error_code: ''
}

export const getArticles = createAsyncThunk('getAticles', async (_, { rejectWithValue }) => {
  const { status, articles, error_code } = await getNews(`${NEWS_API_URL}News`)
  return status === 'ok' ? { error: null, articles } : rejectWithValue({ articles: [], error_code })
})

// HeadersWithoutKey
export const articlesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles: (state: Draft<typeof initialState>, action: PayloadAction<NewsAPIObject[]>) => {
      state.articles = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(HYDRATE, (state: Draft<typeof initialState>) => {
        console.log('HYDRATE')
      })
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        console.log('FULFILLED')
        state.pending = false
        state.articles = payload.articles
        state.fetched = true
      })
      .addCase(getArticles.pending, state => {
        console.log('PENDING')
        state.pending = true
        state.fetched = false
      })
      .addCase(getArticles.rejected, (state, { payload }) => {
        console.log('rejected')
        state.pending = false
        state.error = true
        state.fetched = false
        state.error_code = payload.error_code
      })
  }
})
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setArticles } = articlesSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectArticles = (state: RootState) => state?.news || initialState

// exporting the reducer here, as we need to add this to the store
export default articlesSlice.reducer
