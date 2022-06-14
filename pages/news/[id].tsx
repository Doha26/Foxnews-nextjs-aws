import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import News from '../../components/NewsItem'
import PaginationBottom from '../../components/PaginationBottom'
import Link from 'next/link'
import { useAppSelector } from '../../src/store/hooks'
import { selectArticles } from '../../src/store/slice/articleSlice'

interface IQueryParam {
  id: string
}
const NewsItem = () => {
  const router = useRouter()
  const { id } = router.query as unknown as IQueryParam
  const { articles } = useAppSelector(selectArticles)

  const item = articles?.find(article => article._id === id)
  const itemIndex = articles?.findIndex(article => article._id === id)
  const leftItem = itemIndex === 0 ? item : articles[itemIndex - 1]
  const rightItem = itemIndex == articles.length - 1 ? item : articles[itemIndex + 1]

  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      <div className="sm:mx-auto mx-4 sm:w-6/12 mt-32">
        <Link href="/" title="Back to Home">
          <Image src="/back.svg" alt="Logo" width="39" height="32" className="cursor-pointer" />
        </Link>
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

export default NewsItem
