import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import './TweetBox.css'

export default function TweetBox() {
    return (
        <div className="tweetBox">
          <form>
             <div className="tweetBox_input">
                 <Avatar src="data:image/png;base64,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"/>
                  <input type="text" placeholder="What's happening?"></input>
             </div>
             <input placeholder="Enter image URL" type="text" className="tweetBox_imageInput"/>

             <Button className="tweetBox_tweetButton">Tweet</Button>
          </form>
        </div>
    )
}
