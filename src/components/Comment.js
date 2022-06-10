import React from "react";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import '../css/button.css'

const Comment = () => {
    return (
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img alt='avatar' src={faker.image.image()} />
                </a>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        <i className="heart outline icon"></i>
                        <input type="text" placeholder="Add Comment..." />
                    </div>
                    <div className='ui buttons'>
                        <div className="ui button button-right" tabIndex='0'>留言</div>
                        <div className="ui button button-right">取消</div>
                    </div>
                </div>
            </div>
            <CommentDetail
                author="Sam"
                timeAge="Today at 4:45PM"
                content="Nice blog post"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Lily"
                timeAge="Today at 2:00AM"
                content="I like the subject"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Andy"
                timeAge="Yesterday at 5:00PM"
                content="I like the writing"
                avatar={faker.image.image()}
            />
        </div>
    );
}

export default Comment;