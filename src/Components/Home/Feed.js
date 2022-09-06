import React from 'react';
import Post from './Post';

const Feed = () => {
    return (
        <div className='flex-[5]'>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    );
};

export default Feed;