import { createClient } from 'redis'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import News from '../../components/NewsItem'
import PaginationBottom from '../../components/PaginationBottom'
import { NewsAPIObject } from '../../src/utils'

interface INewsItemPros {
  articles: NewsAPIObject[]
}
interface IQueryParam {
  id: string
}
const NewsItem = ({ articles }: INewsItemPros) => {
  const router = useRouter()
  const { id } = router.query as unknown as IQueryParam

  const item = articles?.find(article => article._id === id)
  const itemIndex = articles?.findIndex(article => article._id === id)
  const leftItem = itemIndex === 0 ? item : articles[itemIndex - 1]
  const rightItem = itemIndex == articles.length - 1 ? item : articles[itemIndex + 1]

  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <div className="sm:mx-auto mx-4 sm:mx-0 sm:w-6/12 mt-20">
        {item && (
          <News
            media={item.media}
            title={item.title}
            summary={item.summary}
            author={item.author}
            authorImg={item.authorImg}
            country={item.country}
            _id={item._id}
            published_date={item.published_date}
            expand={true}
          />
        )}
        <PaginationBottom leftItem={leftItem} rightItem={rightItem} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const client = createClient()
  await client.connect()
  const articles = await client.get('articles')
  return { props: { articles: articles ? JSON.parse(articles) : [] } }
}

export default NewsItem
