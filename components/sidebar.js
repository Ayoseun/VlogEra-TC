import { FiMoreHorizontal, FiBell } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import SideBarOption from './sidebarOption'
import { useState } from 'react'
import { FaRegListAlt, FaHashtag, FaBall } from 'react-icons/fa'
import { BiVideoRecording } from 'react-icons/bi'
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
  RiUser3Line
} from 'react-icons/ri'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import {vlog} from '../public/vlog.png'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-xl m-4 flex-row`,
  tweetButton: `bg-[#20727A] hover:bg-[#1FD4CF] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

function Sidebar(initialSelectedIcon = 'Timeline') {
  const [selected, setSelected] = useState(initialSelectedIcon)
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>VLogEra-TC
      
      </div>
      <div className={style.navContainer}>
        <SideBarOption
          Icon={selected === 'Timeline' ? RiMistFill : RiMistLine}
          text="Timeline"
          isActive={Boolean(selected === 'Timeline')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SideBarOption
          Icon={selected === 'Featured' ? RiBlazeFill : RiBlazeLine}
          text="Featured"
          isActive={Boolean(selected === 'Featured')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SideBarOption
          Icon={selected === 'MyVlog' ? RiVidicon2Fill : BiVideoRecording}
          text="MyVlog"
          isActive={Boolean(selected === 'MyVlog')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SideBarOption
          Icon={selected === 'Profile' ? RiUser3Fill : RiUser3Line}
          text="Profile"
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/'}
        />
       
       <SideBarOption
          Icon={RiMoreFill}
          text="More"
         setSelected={setSelected}
        />
        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Ayoseun</div>
            <div className={style.handle}>@ayoseun</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
