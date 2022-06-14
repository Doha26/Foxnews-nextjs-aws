import Link from 'next/link'
import Header from '../components/Header'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { NewsAPIObject } from '../src/utils'
import News from '../components/NewsItem'
import Nav from '../components/Nav'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'
import { getArticles, selectArticles } from '../src/store/slice/articleSlice'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { articles, error, pending } = useAppSelector(selectArticles)
  const [messageTitle, setMessageTitle] = useState('Latest updates')

  useEffect(() => {
    if (articles.length == 0) {
      //@ts-ignore
      dispatch(getArticles())
    }
  }, [dispatch, articles])

  useEffect(() => {
    if (error) setMessageTitle('Unable to load news from API ...')
    if (pending) {
      setMessageTitle('Loading...')
    } else {
      setMessageTitle('Latest updates')
    }
  }, [error, pending])

  return (
    <div className="flex flex-col">
      <Header />
      <Nav />
      {articles?.length && (
        <div className=" flex justify-center font-bold mt-24 text-2xl underline text-black items-center">
          {messageTitle}
          <span className="flex h-3 w-3 ml-2">
            <div className="animate-ping inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></div>
            <span className="absolute rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      )}

      {articles?.length ? (
        <div className="sm:px-16 py-8 grid grid-cols-1 sm:grid-cols-3  gap-6 mx-auto w-10/12">
          {articles?.map((item: NewsAPIObject) => {
            return (
              <Link href={`/news/${item._id}`} key={item._id}>
                <a>
                  {/* To avoid forwardRef issue with Next/link*/}{' '}
                  <News
                    media={item.media}
                    title={item.title}
                    summary={item.summary}
                    author={item.author}
                    authorImg={item.authorImg}
                    country={item.country}
                    _id={item._id}
                    published_date={item.published_date}
                    expand={false}
                  />
                </a>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="flex font-mono font-bold text-md mx-auto w-10/12 justify-center mt-36"> 0 news Found !</div>
      )}
    </div>
  )
}

export default Home
