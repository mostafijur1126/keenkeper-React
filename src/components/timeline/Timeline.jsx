import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendContext';


const Timeline = () => {
    const {contectNow, setContectNow} = useContext(FriendsContext);
    console.log(contectNow);
    return (
        <div>
            <div className='max-w-7xl mx-auto py-20'>
                <h1 className='text-4xl font-bold'>Timeline</h1>
                <div className='space-y-4 mt-8'>
                    {
                        contectNow.map((item,ind) => (
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