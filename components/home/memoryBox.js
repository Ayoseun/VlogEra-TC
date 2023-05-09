import { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  memBoxLeft: `mr-4`,
  memBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

function MemoryBox() {
  const [memMessage, setMemMessage] = useState()
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img src='//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg' alt="profile image" className={style.profileImage} />
      </div>
      <div className={style.memBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="Create memory"
            value={memMessage}
            onChange={(e) => {
              setTweetMessage(e.target.value)
            }}
          />
          <div className={style.formLowerContainer}>
          <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <button
              type="submit"
              disabled={!memMessage}
              className={`${style.submitGeneral} ${
                memMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              {' '}
              Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MemoryBox
