// rfce
import React from 'react'
import "./Feed.css";
import TweetBox from '../tweetBox/TweetBox'
import Post from '../post/Post.js'

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
            <h2>Home</h2>
            </div>
            
            {/* Tweet box */}
            <TweetBox />

            {/* Posts */}
            <Post />
            <Post />

            <Post />
            <Post />
            

            
            

            
        </div>
    )
}

export default Feed
