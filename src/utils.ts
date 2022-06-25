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
  language?: string | null
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

export const fakeNews = [
  {
    title: "Chelsea Marcantel's The Upstairs Department Finishes World Premiere Run June 12",
    author: 'Leah Putnam',
    published_date: '2022-06-12 04:30:00',
    link: 'https://playbill.com/article/chelsea-marcantels-the-upstairs-department-finishes-world-premiere-run-june-12',
    clean_url: 'playbill.com',
    summary:
      'Regional News Regional News Regional News Regional News Regional News Video Los Angeles News Regional News Regional News Regional News Awards Video Regional News Regional News Video Video Regional News Production Photos Production Photos Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Los Angeles News Regional News Regional News Production Photos Cast Recordings &',
    topic: 'news',
    country: 'US',
    language: null,
    media: 'https://assets.playbill.com/editorial/_1200x630_crop_center-center_82_none/1cVRwy-4.jpeg?mtime=1648834896',
    authorImg:
      'https://assets.playbill.com/editorial/_1200x630_crop_center-center_82_none/1cVRwy-4.jpeg?mtime=1648834896',
    twitter_account: '@playbill',
    _score: 5.424161,
    _id: 'c17698032111425760dac1cf58bd8778'
  },
  {
    title: "Britta Johnson's Life After Begins Previews at Chicago's Goodman Theatre June 11",
    author: 'Leah Putnam',
    published_date: '2022-06-11 04:01:28',
    link: 'https://playbill.com/article/britta-johnsons-life-after-begins-previews-at-chicagos-goodman-theatre-june-11',
    clean_url: 'playbill.com',
    summary:
      'Regional News Regional News Regional News Regional News Video Los Angeles News Regional News Regional News Regional News Awards Video Regional News Regional News Video Video Regional News Production Photos Production Photos Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Regional News Los Angeles News Regional News Regional News Production Photos Cast Recordings & Albums Region',
    topic: 'science',
    country: 'US',
    language: 'en',
    authorImg:
      'https://assets.playbill.com/editorial/_1200x630_crop_center-center_82_none/1cVRwy-4.jpeg?mtime=1648834896',
    media:
      'https://assets.playbill.com/editorial/_1200x630_crop_center-center_82_none/Samantha-Williams-Paul-Alexander-Nolan-and-Bryonha-Marie-Parham_HR.jpg?mtime=1654788330',
    twitter_account: '@playbill',
    _score: 5.418454,
    _id: 'f54468ea81e6026241e6af6b2bb07848'
  }
]

export const NEWS_API_URL = 'https://api.newscatcherapi.com/v2/search?q='
