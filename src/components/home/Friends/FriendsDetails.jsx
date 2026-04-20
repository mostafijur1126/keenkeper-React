import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router';
import useFriends from '../../../hooks/useFriends';
import { IoIosText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { FaPhoneSquareAlt, FaEnvelope, FaCalendarAlt, FaClock, FaHeart, FaStar, FaUserFriends } from 'react-icons/fa';
import { GiRose, GiLipstick } from 'react-icons/gi';
import { FriendsContext } from '../../../context/FriendContext';

const FriendsDetails = () => {
    const { friends } = useFriends();
    const { id } = useParams();
    const expectedFriend = friends.find(friend => friend.id === Number(id));
    const { contectNow, setContectNow } = useContext(FriendsContext);

    if (!expectedFriend) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-r-4 border-rose-500 mx-auto mb-4'></div>
                    <p className='text-gray-600 text-lg'>Loading bestie details... 💕</p>
                </div>
            </div>
        );
    }

    const handelContectHistory = (type) => {
        setContectNow(contectNow => [...contectNow, { ...expectedFriend, type: type, date: new Date().toDateString() }]);
    };

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Back Button */}
                <NavLink to='/' className='inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-6 transition-colors'>
                    <span>←</span> Back to Besties
                </NavLink>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Left Column - Profile Card */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300'>
                            {/* Profile Image */}
                            <div className='relative overflow-hidden h-80 bg-gradient-to-br from-pink-200 to-rose-200'>
                                <img 
                                    src={expectedFriend.picture} 
                                    alt={expectedFriend.name} 
                                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                                />
                                {/* Status Badge Overlay */}
                                <div className='absolute top-4 right-4'>
                                    {expectedFriend.status === 'active' ? (
                                        <span className='bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-sm shadow-lg'>
                                            🟢 Active
                                        </span>
                                    ) : expectedFriend.status === 'busy' ? (
                                        <span className='bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm shadow-lg'>
                                            🟠 Busy
                                        </span>
                                    ) : (
                                        <span className='bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 py-1 rounded-full text-sm shadow-lg'>
                                            ⚪ Away
                                        </span>
                                    )}
                                </div>
                                {/* Decorative Heart Overlay */}
                                <div className='absolute bottom-4 left-4 bg-white/80 rounded-full p-2 backdrop-blur-sm'>
                                    <FaHeart className='text-pink-500 text-xl' />
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className='p-6 text-center'>
                                <h1 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2'>
                                    {expectedFriend.name}
                                </h1>
                                
                                {/* Tags */}
                                <div className='flex flex-wrap gap-2 justify-center mb-4'>
                                    {expectedFriend.tags.map((tag, idx) => (
                                        <span key={idx} className='text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium'>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bio */}
                                <div className='bg-pink-50 rounded-xl p-4 mb-4'>
                                    <p className='text-gray-700 italic'>"{expectedFriend.bio}"</p>
                                </div>

                                {/* Email */}
                                <div className='flex items-center justify-center gap-2 text-gray-600 text-sm'>
                                    <FaEnvelope className='text-pink-400' />
                                    <p>{expectedFriend.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details and Actions */}
                    <div className='lg:col-span-2'>
                        {/* Stats Cards */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8'>
                            <div className='bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 group'>
                                <div className='bg-gradient-to-br from-pink-100 to-rose-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                                    <FaClock className='text-pink-500 text-xl' />
                                </div>
                                <p className='text-2xl font-bold text-gray-800'>{expectedFriend.days_since_contact}</p>
                                <p className='text-gray-500 text-sm'>Days Since Contact</p>
                            </div>

                            <div className='bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 group'>
                                <div className='bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                                    <FaStar className='text-rose-500 text-xl' />
                                </div>
                                <p className='text-2xl font-bold text-gray-800'>{expectedFriend.goal}</p>
                                <p className='text-gray-500 text-sm'>Goal</p>
                            </div>

                            <div className='bg-white/80 backdrop-blur-sm rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group'>
                                <div className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                                    <FaCalendarAlt className='text-purple-500 text-xl' />
                                </div>
                                <p className='text-2xl font-bold text-gray-800'>{expectedFriend.next_due_date}</p>
                                <p className='text-gray-500 text-sm'>Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal Section */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-pink-100'>
                            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-gradient-to-br from-pink-100 to-rose-100 rounded-full p-3'>
                                        <FaUserFriends className='text-pink-500 text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-gray-500 text-sm'>Relationship Goal</p>
                                        <p className='text-gray-800 font-semibold'>Connect every 30 days</p>
                                    </div>
                                </div>
                                <button className='bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
                                    Edit Goal
                                </button>
                            </div>
                        </div>

                        {/* Quick Check-In Section */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-pink-100'>
                            <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>
                                Quick Check-In 💕
                            </h1>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                                <NavLink
                                    onClick={() => handelContectHistory("call")}
                                    className='group flex flex-col items-center justify-center p-6 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer'
                                >
                                    <FaPhoneSquareAlt className='text-5xl mb-3 group-hover:animate-pulse' />
                                    <p className='font-semibold text-lg'>Call</p>
                                    <p className='text-xs opacity-90'>Connect now</p>
                                </NavLink>

                                <div
                                    onClick={() => handelContectHistory("text")}
                                    className='group flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer'
                                >
                                    <IoIosText className='text-5xl mb-3 group-hover:animate-pulse' />
                                    <p className='font-semibold text-lg'>Text</p>
                                    <p className='text-xs opacity-90'>Send a message</p>
                                </div>

                                <div
                                    onClick={() => handelContectHistory("video")}
                                    className='group flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer'
                                >
                                    <IoVideocam className='text-5xl mb-3 group-hover:animate-pulse' />
                                    <p className='font-semibold text-lg'>Video</p>
                                    <p className='text-xs opacity-90'>Face to face</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact History Section */}
                        {contectNow.length > 0 && (
                            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-pink-100'>
                                <div className='flex items-center gap-2 mb-6'>
                                    <GiRose className='text-pink-500 text-2xl' />
                                    <h2 className='text-xl font-bold text-gray-800'>Recent Connections</h2>
                                    <GiLipstick className='text-pink-500 text-2xl' />
                                </div>
                                <div className='space-y-3'>
                                    {contectNow.map((item, ind) => (
                                        <div key={ind} className='bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 hover:shadow-md transition-shadow'>
                                            <div className='flex items-center justify-between flex-wrap gap-2'>
                                                <div className='flex items-center gap-3'>
                                                    {item.type === 'call' && <FaPhoneSquareAlt className='text-green-500 text-xl' />}
                                                    {item.type === 'text' && <IoIosText className='text-blue-500 text-xl' />}
                                                    {item.type === 'video' && <IoVideocam className='text-purple-500 text-xl' />}
                                                    <div>
                                                        <p className='font-semibold text-gray-800'>
                                                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with {item.name}
                                                        </p>
                                                        <p className='text-xs text-gray-500 flex items-center gap-1 mt-1'>
                                                            <FaClock size={10} /> {item.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='text-pink-400 text-sm'>
                                                    💕 Connected
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Empty Contact History State */}
                        {contectNow.length === 0 && (
                            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center border border-pink-100'>
                                <div className='text-5xl mb-3'>💕</div>
                                <p className='text-gray-500'>No connections yet. Reach out to your bestie!</p>
                                <p className='text-sm text-gray-400 mt-2'>Choose Call, Text, or Video above</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;