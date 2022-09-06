import React from 'react';
import Feed from './Feed';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Home = ({ user, posts }) => {
    return (
        <div className='flex mt-2'>
            <LeftBar user={user}></LeftBar>
            <Feed posts={posts}></Feed>
            <RightBar></RightBar>
        </div>
    );
};

export default Home;