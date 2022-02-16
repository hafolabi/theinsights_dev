import './share.css'
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/profile_pix/1.jfif" alt="" />
                <input placeholder = "what's on your mind" className='shareInput' />
            </div>
            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>

                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div>

                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
