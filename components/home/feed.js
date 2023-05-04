import { headers } from 'next/dist/client/components/headers'
import {
  RiVidicon2Fill,
  RiMistFill,
  RiMistLine,
  RiMoreFill,
  RiThumbUpLine,
  RiThumbUpFill,
  RiThumbDownFill,
  RiThumbDown,
  RiStarFill,
  RiStar,
  RiBlazeFill,
  RiBlazeLine,
  RiTimerFlashFill,
  RiTimerFlashLine,
  RiUser3Fill,
  RiUser3Line,
} from 'react-icons/ri'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

function Feed() {
  return <div className={style.wrapper}>
      <div className={style.header}>
      
      </div>
  </div>
}

export default Feed
