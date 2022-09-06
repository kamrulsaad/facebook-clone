import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { Share } from '@mui/icons-material';

const Post = () => {
    return (
        <div className='bg-white mb-3 rounded-lg mx-auto max-w-lg'>
            <div className='p-2 mx-2 mt-2 flex items-center transition-all justify-between duration-150 gap-2'>
                <div className="flex items-center cursor-pointer gap-2">
                    <img className='w-10 h-10 rounded-full object-cover' src="assets/photo-1607569490015-7101095605ed.webp" alt="" />
                    <p className='font-medium'>Test User</p>
                </div>
                <MoreHorizIcon className='cursor-pointer'></MoreHorizIcon>
            </div>
            <div className='bg-black'>
                <img className='mx-auto max-h-[60vh]' src="assets/photo-1607569490015-7101095605ed.webp" alt="" />
            </div>
            <div className='flex items-center justify-between p-4'>
                <div className='flex gap-1'>
                    <img className='w-5' src="https://th.bing.com/th/id/OIP.Aci69hfYysI3iDUurqOefQHaHa?pid=ImgDet&rs=1" alt="" />
                    <p className='text-gray-500 text-sm font-medium'>100 likes</p>
                </div>
                <p className='text-gray-500 text-sm'>340 comments 98 shares</p>
            </div>
            <hr className='mx-4' />
            <div className='py-2 grid grid-cols-3 px-4 gap-2'>
                <div className='flex text-gray-400 text-sm gap-1  hover:bg-slate-100 hover:rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center'>
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon> Like
                </div>
                <div className='flex text-gray-400 text-sm gap-1  hover:bg-slate-100 hover:rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center'>
                    <CommentIcon></CommentIcon> Comment
                </div>
                <div className='flex text-gray-400 text-sm gap-1  hover:bg-slate-100 hover:rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center'>
                    <Share></Share> Share
                </div>
            </div>
            <hr className="mx-4" />
            <div className='px-4 py-2'>
                <div className='flex items-center gap-3'>
                    <img className='w-8 h-8 rounded-full object-cover' src="assets/photo-1607569490015-7101095605ed.webp" alt="" />
                    <div className='p-2 bg-slate-100 rounded-lg'>
                        <p className='font-medium text-sm'>Test User</p>
                        <p className='text-xs'>Test User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;