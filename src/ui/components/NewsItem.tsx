import { useState } from 'react'
import moment from 'moment'
import { NewsAPIObject } from '../../utils'

const News = ({ media, title, summary, author, country, published_date, expand }: NewsAPIObject) => {
  const [isReadMore, setIsReadMore] = useState(false)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <div
      className={`flex flex-col ${
        !expand ? 'cursor-pointer transition hover:scale-105 duration-300 ease-in-out delay-50 mt-4' : 'mt-8'
      }`}
    >
      <img className={`object-cover rounded w-full ${expand ? 'h-80' : 'h-48'}`} src={media} alt="Img" />
      <h1
        className={`line-clamp-3 py-3 font-Inter font-semibold ${
          expand ? 'text-3xl' : 'text-2xl'
        } text-black hover:text-primary text-left text-ellipsis overflow-clip `}
      >
        {title}
      </h1>
      <p className="line-clamp-4 font-medium text-base text-description  mb-5 text-left">
        {isReadMore ? summary?.slice(0, 150) : summary}
        <span onClick={() => toggleReadMore()} className="font-semibold text-sm cursor-pointer text-blue-400">
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </p>
      <div className="flex items-center">
        <img className="rounded-lg w-10 h-10 object-cover" src={media} alt="Img" />
        <div className="flex flex-col ml-2">
          <strong>
            {author} <span className="text-xs text-description">| {country}</span>
          </strong>
          <span className="text-sm text-description">{moment(published_date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </div>
    </div>
  )
}

export default News
