import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {



    return (
        <div className='flex-[5]'>
            {
                posts.map((post, index) => <Post key={index} post={post}></Post>)
            }
        </div>
    );
};

export default Feed;