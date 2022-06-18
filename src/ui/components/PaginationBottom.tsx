import { NewsAPIObject } from '../../utils'
import PaginationItem from './PaginationItem'

interface IPaginationBottomProps {
  leftItem?: NewsAPIObject
  rightItem?: NewsAPIObject
}
const PaginationBottom = ({ leftItem, rightItem }: IPaginationBottomProps) => {
  const {
    title: leftItemTitle,
    media: leftItemMediaSource,
    published_date: leftItemDate,
    _id: leftItemId
  } = leftItem as NewsAPIObject
  const {
    title: rightItemTitle,
    media: rightItemMediaSource,
    published_date: rightItemDate,
    _id: rightItemId
  } = rightItem as NewsAPIObject

  return (
    <div className="mt-10 mb-20 md:flex flex-row justify-between w-full">
      <PaginationItem
        position="left"
        title={leftItemTitle}
        mediaSource={leftItemMediaSource}
        date={leftItemDate}
        id={leftItemId}
      />
      <PaginationItem
        position="right"
        title={rightItemTitle}
        mediaSource={rightItemMediaSource}
        date={rightItemDate}
        id={rightItemId}
      />
    </div>
  )
}

export default PaginationBottom
