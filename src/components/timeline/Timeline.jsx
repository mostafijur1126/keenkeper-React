import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendContext';


const Timeline = () => {
    const { contectNow} = useContext(FriendsContext);
    const [serch, setSerch] = useState('');
    const [type, setType] = useState('all');
    const searchRes = contectNow.filter(item => {
        const matchName = item.name.toLowerCase().includes(serch.toLowerCase());
        const matchType = type === "" || type === "all" ? true : item.type === type;
        return matchName && matchType
    });
    
    return (
        <div>
            <div className='max-w-7xl mx-auto py-20'>
                <div className='flex gap-10'>
                    <h1 className='text-4xl font-bold'>Timeline</h1>
                    <input value={serch} onChange={e => setSerch(e.target.value)} type="text" placeholder='search your friend' className='border border-green-300' />
                    <select onChange={e=> setType(e.target.value)}>
                        <option value="">All</option>
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                <div className='space-y-4 mt-8'>
                    {
                        searchRes.map((item, ind) => (
                            <div key={ind} className='flex items-center gap-5 p-5 bg-fuchsia-50 rounded shadow'>
                                <div className='w-20 h-20 rounded-full overflow-hidden'>
                                    <img src={item.picture} alt="" className='rounded-full w-full h-full object-cover' />
                                </div>
                                <div>
                                    <p><span>{item.type}</span> with {item.name}</p>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;