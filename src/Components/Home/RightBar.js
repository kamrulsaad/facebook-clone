import React, { useEffect, useState } from 'react';

const RightBar = () => {

    const [user, setUsers] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5000/allUsers", requestOptions)
            .then(response => response.json())
            .then(result => setUsers(result.slice(0,8)))
    },[])

    return (
        <div className='flex-[3] hidden md:block sticky top-[3rem] max-h-screen'>
            <h3 className='text-xl font-medium mb-2'>
                Sponsored
            </h3>
            <div className='flex gap-3 mb-2 items-center'>
                <img className='w-40 h-28 cursor-pointer rounded-lg object-cover' src="https://tse4.mm.bing.net/th/id/OIP.ka9yJ6JfQTOCWcLFlPE71gHaC0?w=313&h=133&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />
                <div>
                    <p className='text-sm font-medium'>Save 20% on the next Diwali season offers</p>
                    <p className='text-xs text-gray-600'>amazon.in</p>
                </div>
            </div>
            <div className='flex gap-3 mb-2 items-center'>
                <img className='w-40 h-20 cursor-pointer rounded-lg object-cover' src="https://tse1.mm.bing.net/th/id/OIP.8jljtTjowgz74s9TcoQPUwHaEo?pid=ImgDet&rs=1" alt="" />
                <div>
                    <p className='text-sm font-medium'>Get free courses on web3 and blockchain</p>
                    <p className='text-xs text-gray-600'>metaschool.so</p>
                </div>
            </div>

            <hr className='mb-2 mt-4 border-none h-[1px] bg-slate-400 mr-1' />

            <h3 className='text-lg font-medium mb-2'>
                Contacts
            </h3>
            {
                user.map((u, index) => <div key={index} className=' px-0 mt-2 flex items-center transition-all duration-150 gap-2'>
                <div className='relative rounded-full'>
                    <img className='w-10 h-10 rounded-full object-cover' src={u.profile_picture} alt="" />
                    <div className='bg-green-400 p-1 w-1 rounded-full absolute top-0 left-7 outline outline-stone-100'></div>
                </div>
                <p className='font-medium'>{u.full_name}</p>
            </div>)
            }
        </div>
    );
};

export default RightBar;