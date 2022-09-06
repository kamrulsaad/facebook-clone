import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import AddIcon from '@mui/icons-material/Add';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Navbar = () => {
    return (
        <div className='bg-white md:px-6 px-4 flex justify-between items-center border-b h-12 border-slate-300 shadow-md sticky top-0 z-50'>
            <div className='flex'>
                <Link to='/'>
                    <div>
                        <img className='w-9 rounded-full' src="assets/logo.jpg" alt="" />
                    </div>
                </Link>
                <ul className="items-center relative -ml-6 hidden space-x-8 lg:flex">
                    <SearchIcon className="absolute left-10 text-gray-500 scale-75 mt-1"></SearchIcon>
                    <input type="text" className="w-60 rounded-3xl bg-slate-200 text-sm p-2 pl-10 focus:outline-none" placeholder="Search" />
                </ul>
            </div>
            <div className='hidden md:flex justify-center items-center gap-3 '>
                <div className='flex w-20 py-2 cursor-pointer justify-center border-b-4 border-blue-500 items-center '>
                    <HomeIcon className='text-blue-500' ></HomeIcon>
                </div>
                <div className='flex w-20 py-2 cursor-pointer justify-center items-center hover:shadow-md hover:rounded-lg hover:bg-slate-200'>
                    <PeopleAltIcon ></PeopleAltIcon>
                </div>
                <div className='flex w-20 py-2 cursor-pointer justify-center items-center hover:shadow-md hover:rounded-lg hover:bg-slate-200'>
                    <OndemandVideoIcon ></OndemandVideoIcon>
                </div>
                <div className='flex w-20 py-2 cursor-pointer justify-center items-center hover:shadow-md hover:rounded-lg hover:bg-slate-200'>
                    <GroupsIcon ></GroupsIcon>
                </div>
                <div className='flex w-20 py-2 cursor-pointer justify-center items-center hover:shadow-md hover:rounded-lg hover:bg-slate-200'>
                    <StoreIcon ></StoreIcon>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-full w-10 h-10 hidden sm:flex items-center justify-center'>
                    <AddIcon></AddIcon>
                </div>
                <div className='bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-full w-10 h-10 hidden sm:flex items-center justify-center'>
                    <QuestionAnswerIcon></QuestionAnswerIcon>
                </div>
                <div className='bg-slate-200 hidden sm:flex hover:bg-slate-300 cursor-pointer rounded-full w-10 h-10 items-center justify-center'>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </div>
                <div className='cursor-pointer'>
                    <img className='w-10 h-10 rounded-full object-cover' src="assets/photo-1607569490015-7101095605ed.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;