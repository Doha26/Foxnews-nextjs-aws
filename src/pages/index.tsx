import Header from '../ui/components/Header'
import type { NextPage } from 'next'
import Nav from '../ui/components/Nav'
import Footer from '../ui/components/Footer'
import { fakeNews, NewsAPIObject } from '../utils'
import Link from 'next/link'
import News from '../ui/components/NewsItem'
import { useState } from 'react'

const articles: NewsAPIObject[] = fakeNews
const Home: NextPage = () => {
  const [messageTitle, setMessageTitle] = useState('Latest updates')
  return (
    <div className="flex flex-col scrollbar-hide md:scrollbar-default">
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
      {articles?.length && (
        <div className="sm:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mx-auto w-10/12 mb-32">
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
      )}
      <Footer />
    </div>
  )
}

export default Home
