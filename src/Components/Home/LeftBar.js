import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';

const LeftBar = ({user}) => {
    return (
        <div className='flex-[3] hidden md:block sticky top-[3rem] w-full max-h-screen min-h-screen'>
            <div className='cursor-pointer p-2 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <img className='w-10 h-10 rounded-full object-cover' src={user.profile_picture} alt="" />
                <p className='font-medium'>{user.username}</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <PeopleAltIcon className='text-blue-500'></PeopleAltIcon>
                <p className='font-medium'>Friends</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <GroupsIcon className='text-blue-500'></GroupsIcon>
                <p className='font-medium'>Groups</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <StoreIcon className='text-blue-500'></StoreIcon>
                <p className='font-medium'>Marketplace</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <OndemandVideoIcon className='text-blue-500'></OndemandVideoIcon>
                <p className='font-medium'>Watch</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <HistoryIcon className='text-blue-500'></HistoryIcon>
                <p className='font-medium'>Memories</p>
            </div>
            <div className='cursor-pointer pl-2 py-4 mx-2 mt-2 flex items-center transition-all duration-150 gap-2 hover:bg-white hover:shadow-md hover:rounded-lg'>
                <BookmarkIcon className='text-purple-500'></BookmarkIcon>
                <p className='font-medium'>Saved</p>
            </div>
        </div>
    );
};

export default LeftBar;