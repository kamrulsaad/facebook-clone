import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { Share } from '@mui/icons-material';

const Post = ({post}) => {

    const {user, image, shared, caption} = post
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const [liked, setLiked] = useState(post.liked)
    const [comments, setComments] = useState(post.comments)
    const [count, setCount] = useState(post.likes)
    const [comment, setComment] = useState('')

    const addComment = (e) => {
        e.preventDefault()
        const newComment = {
            user : {
                username: currentUser.username,
                profile_picture: currentUser.profile_picture 
            },
            text: comment
        }
        setComments([ newComment, ...comments])
        e.target.reset()
    }

    return (
        <div className='bg-white mb-3 rounded-lg mx-auto max-w-lg shadow-lg'>
            <div className='p-2 mx-2 mt-2 flex items-center transition-all justify-between duration-150 gap-2'>
                <div className="flex items-center cursor-pointer gap-2">
                    <img className='w-10 h-10 rounded-full object-cover' src={user.profile_picture} alt="" />
                    <p className='font-medium'>{user.username}</p>
                </div>
                <MoreHorizIcon className='cursor-pointer'></MoreHorizIcon>
            </div>
            <p className='text-sm font-medium capitalize px-2'>{caption.split(" ").slice(2, Math.round(Math.random()*30)).join(' ')}</p>
            <div className='bg-black'>
                <img className='mx-auto max-h-[60vh]' src={image} alt="" />
            </div>
            <div className='flex items-center justify-between p-4'>
                <div className='flex gap-1'>
                    <img className='w-5' src="https://th.bing.com/th/id/OIP.Aci69hfYysI3iDUurqOefQHaHa?pid=ImgDet&rs=1" alt="" />
                    <p className='text-gray-500 text-sm font-medium'>{count} likes</p>
                </div>
                <p className='text-gray-500 text-sm'>{comments.length} comments {shared} shares</p>
            </div>
            <hr className='mx-4' />
            <div className='py-2 grid grid-cols-3 px-4 gap-2'>
                <div onClick={() => {
                    setLiked(!liked)
                    liked ? setCount(count-1) : setCount(count+1)
                }} className={`flex text-gray-400 text-sm gap-1  hover:bg-slate-100 rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center ${liked && 'bg-blue-100 shadow-md'}`}>
                    {
                        liked ? <ThumbUpIcon className='text-blue-500'></ThumbUpIcon> : <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                    } Like{liked&& 'd'}
                </div>
                <div className='flex text-gray-400 text-sm gap-1  hover:bg-slate-100 hover:rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center'>
                    <CommentIcon></CommentIcon> Comment
                </div>
                <div className='flex text-gray-400 text-sm gap-1  hover:bg-slate-100 hover:rounded-lg transition-all duration-150 cursor-pointer py-2 hover:shadow-sm justify-center items-center'>
                    <Share></Share> Share
                </div>
            </div>
            <hr className="mx-4" />

            <form className='px-4 py-1 flex gap-4' onSubmit={addComment} >
                <input onChange={(e) => setComment(e.target.value)} type="text" placeholder='Add a comment' className='py-2 px-4 w-full bg-slate-100 rounded-3xl focus:outline-none text-sm' />
                <button disabled={!comment} className='text-blue-600 disabled:cursor-not-allowed transition-all duration-300 disabled:text-sky-200 text-sm font-medium' type='submit'>Post</button>
            </form>

            <div className='px-4 py-2'>
                {
                    comments.map((c, index) => <div key={index} className='flex mt-2 items-center gap-3'>
                    <img className='w-8 h-8 rounded-full object-cover' src={c.user.profile_picture} alt="" />
                    <div className='p-2 bg-slate-100 rounded-lg'>
                        <p className='font-medium text-sm'>{c.user.username}</p>
                        <p className='text-xs'>{c.text}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Post