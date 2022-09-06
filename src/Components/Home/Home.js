import React from 'react';
import Feed from './Feed';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Home = () => {
    return (
        <div className='flex mt-2'>
            <LeftBar></LeftBar>
            <Feed></Feed>
            <RightBar></RightBar>
        </div>
    );
};

export default Home;