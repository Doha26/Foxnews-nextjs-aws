export type NewsAPIObject = {
  media: string
  title: string
  summary?: string
  authorImg?: string
  author?: string
  authorRole?: string
  hasImage?: boolean
  largeImage?: boolean
  itemIndex?: number
  link?: string
  published_date?: string
  topic?: string
  country?: string
  language?: string
  _id?: string
  _score?: number
  twitter_account?: string
  clean_url?: string
  expand?: boolean
}

export type NewsAPIResponse = {
  status?: string
  total_pages?: number
  page_size?: number
  articles?: NewsAPIObject[]
}

export interface IQueryParam {
  item: NewsAPIObject
  leftItem: NewsAPIObject
  rightItem: NewsAPIObject
}

export const NEWS_API_URL = 'https://api.newscatcherapi.com/v2/search?q='
