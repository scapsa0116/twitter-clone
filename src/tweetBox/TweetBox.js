import React, {useState}from 'react'
import { Avatar, Button } from '@material-ui/core'
import './TweetBox.css'
import db from '../firebase'

export default function TweetBox() {


const [tweetMessage, setTweetMessage] = useState("")
const [tweetImage, setTweetImage] = useState("")


const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
        displayName: "stela",
        username: 'stela123',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "data:image/png;base64,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"

    });

    setTweetMessage("");
    setTweetImage("");
}





    return (
        <div className="tweetBox">
          <form>
             <div className="tweetBox_input">
                 <Avatar src="data:image/png;base64,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"/>
                  <input
                  onChange={(e) => setTweetMessage(e.target.value)} 
                  value={tweetMessage}
                  type="text" 
                  placeholder="What's happening?">
                  </input>
             </div>
             <input 
            onChange={(e) => setTweetImage(e.target.value)} 
            value={tweetImage}
             placeholder="Enter image URL" 
             type="text" 
             className="tweetBox_imageInput"/>

             <Button 
             onClick={sendTweet}
             className="tweetBox_tweetButton">
                 Tweet
             </Button>
          </form>
        </div>
    )
}
