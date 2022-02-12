import React from "react";

import './profile.css'

const Page = () => {
    return (
        <div className="page">
            <div className="picture"></div>
            <div className="info">
                <div className="avatar"></div>
                <div className="contacts">
                    <div className="contacts-name">Name: </div>
                    <div className="contacts-birthday contacts-text">Birthday: </div>
                    <div className="contacts-city contacts-text">City: </div>
                    <div className="contacts-edu contacts-text">Education: </div>
                    <div className="contacts-web contacts-text">Web-site: </div>
                </div>
            </div>
            <div className="posts">
                <div className="posts-text">My Posts</div>
                <div className="posts-send">
                    <input className="posts-input" placeholder="Your-news..." />
                    <button className="posts-btn">Send</button>
                </div>
                <div className="posts-block">
                    <div className="posts-post">
                        <div className="post-logo"></div>
                        <div className="post-text">Some text some text some text some text some text?</div>
                    </div>
                    <div className="posts-post">
                        <div className="post-logo"></div>
                        <div className="post-text">Some! Text some text some text some text some text</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;