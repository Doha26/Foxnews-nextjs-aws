import moment from 'moment'
import Link from 'next/link'

interface PaginationItemProps {
  position: 'right' | 'left'
  title?: string
  mediaSource?: string
  date?: string
  id?: string
}
const PaginationItem = ({ position, title, mediaSource, date, id }: PaginationItemProps) => {
  const image = mediaSource as string
  return position == 'left' ? (
    <Link href={`/news/${id}`}>
      <div className="flex max-w-sm cursor-pointer transition hover:scale-105 duration-300 ease-in-out delay-50 w-full">
        {image && <img className="rounded w-16 h-16" src={image} alt="Img" />}
        <div className="flex flex-col ml-2 max-w-xs hover:underline justify-items-start ">
          <strong className="line-clamp-3 text-ellipsis overflow-hidden">{title}</strong>
          <span className="text-sm text-description">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </div>
    </Link>
  ) : (
    <Link href={`/news/${id}`}>
      <div className="flex mt-10 sm:mt-0 cursor-pointer max-w-sm transition hover:scale-105 duration-300 ease-in-out delay-50 ">
        <div className="flex flex-col  mr-2 max-w-xs hover:underline text-right ">
          <strong className="line-clamp-3">{title}</strong>
          <span className="text-sm ">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        {image && <img className="rounded pl-22 w-16 h-16 " src={image} alt="Img" />}
      </div>
    </Link>
  )
}

export default PaginationItem
