import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router';
import useFriends from '../../../hooks/useFriends';
import { IoIosText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa';
import { FriendsContext } from '../../../context/FriendContext';

const FriendsDetails = () => {
    const { friends } = useFriends();
    const { id } = useParams();
    const expectedFriend = friends.find(friend => friend.id === Number(id));
    const {contectNow, setContectNow} = useContext(FriendsContext);

    // console.log(contectNow);
    if (!expectedFriend) {
        return <div>
            <p>Loading....</p>
        </div>
    }

    const handelContectHistory = (type) => {
        setContectNow(contectNow => [...contectNow,{...expectedFriend, type:type, date: new Date().toDateString()}])
    }
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto grid grid-cols-3'>
                <div className='col-span-1'>
                    <div className='bg-gray-50 p-5 rounded shadow'>
                        <div>
                            <img src={expectedFriend.picture} alt="" />
                        </div>
                        <div>
                            <h1>{expectedFriend.name}</h1>
                            <div><p>{expectedFriend.status}</p></div>
                            <div><p>{expectedFriend.tags}</p></div>
                            <p>"{expectedFriend.bio}"</p>
                            <p>{expectedFriend.email}</p>
                        </div>

                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 gap-5 justify-between'>
                        <div className='p-5 text-center border'>
                            <p>{expectedFriend.days_since_contact}</p>
                            <p>Days Since Contact</p>
                        </div>
                        <div className='p-5 text-center border'>
                            <p>{expectedFriend.goal}</p>
                            <p>Goal</p>
                        </div>
                        <div className='p-5 text-center border'>
                            <p>{expectedFriend.next_due_date}</p>
                            <p>Next Due</p>
                        </div>
                    </div>
                    <div className='flex justify-between py-8 border'>
                        <div>
                            <p>Relationship Goal</p>
                            <p>Connect every 30 days</p>
                        </div>
                        <div><button>Edit</button></div>
                    </div>
                    <div>
                        <h1>Quick Check-In</h1>
                        <div className='grid grid-cols-3 gap-5 py-8'>
                            <NavLink 
                            onClick={()=> handelContectHistory("call")}
                             className='flex flex-col items-center justify-center p-5 bg-accent rounded text-white text-4xl '>
                                <FaPhoneSquareAlt />
                                <p>Call</p>
                            </NavLink>
                            <div
                            onClick={()=> handelContectHistory("text")}
                             className='flex flex-col items-center justify-center p-5 bg-accent rounded text-white text-4xl '>
                                <IoIosText />
                                <p>Text</p>
                            </div>
                            <div
                            onClick={()=> handelContectHistory("video")}
                             className='flex flex-col items-center justify-center p-5 bg-accent rounded text-white text-4xl '>
                                <IoVideocam />
                                <p>Video</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            contectNow.map((item ,ind )=> (
                                <div key={ind} >
                                    <div>
                                        <p>{item.type} whit {item.name}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;