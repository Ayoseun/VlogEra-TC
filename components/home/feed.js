import { headers } from 'next/dist/client/components/headers'
import { BsStars } from 'react-icons/bs'
import MemoryBox from './memoryBox'
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
import Post from '../post'

const style = {
  wrapper: `flex-[4]  h-[100vh] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#0000] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
  postList: `overflow-scroll h-[80vh]`,
}

const mems = [
  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },
  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-04-14T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },
  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 
  },
  {
    displayName: 'Ayoseun',
    userName: '07678785657',
    avatar:
      '//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2023-06-01T12:00:00.000Z',
    vlog:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
  
]

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Timeline</div>
        <BsStars />
      </div>
      <MemoryBox />
      <div className={style.postList}>
      {mems.map((mem, index) => (
        <Post
          key={index}
          displayName={mem.displayName}
          userName={`${mem.userName.slice(0,4 )}...${mem.userName.slice(-4)}`}
         
          text={mem.text}
          avatar={mem.avatar}
          timestamp={mem.timestamp}
          vlog={mem.vlog}
        />
      ))}
      </div>
     
    </div>
  )
}

export default Feed
