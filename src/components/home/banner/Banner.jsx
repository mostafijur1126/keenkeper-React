import React from 'react';
import { FaGlassCheers, FaHeart, FaRegSmile, FaStar, FaUserPlus } from 'react-icons/fa';
import { GiRose, GiLipstick } from 'react-icons/gi';
import useFriends from '../../../hooks/useFriends';
import { MdLocalFlorist } from 'react-icons/md';
const Banner = () => {
    const { friends } = useFriends();
    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50' >

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py:8 sm:py-12 lg:py-16 '>
                <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
                    <div className='flex justify-center gap-3 mb-6'>
                        <GiRose className='text-pink-400 text-3xl animate-bounce' />
                        <FaHeart className='text-rose-400 text-3xl animate-pulse' />
                        <GiLipstick className='text-pink-500 text-3xl animate-bounce' />
                    </div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent mb-4 font-serif'>
                        My Happy Tribe
                    </h1>
                    <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className='group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full 
                                   font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 
                                   transition-all duration-300 flex items-center gap-2 mx-auto'>
                        <FaUserPlus className='group-hover:rotate-12 transition-transform' />
                        Add a Bestie
                        <FaHeart className='group-hover:scale-110 transition-transform' size={16} />
                    </button>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-pink-100'>
                        <div className='bg-gradient-to-br from-pink-100 to-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <FaRegSmile className='text-pink-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-pink-600 mb-2'>{friends.length}</p>
                        <p className='text-gray-600 font-medium'>Total Besties</p>
                        <div className='mt-3 text-sm text-pink-400'>✨ Growing everyday ✨</div>
                    </div>
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center 
                                  shadow-lg hover:shadow-2xl transition-all duration-300 
                                  hover:scale-105 border border-rose-100'>
                        <div className='bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-16 h-16 
                                      flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <FaStar className='text-rose-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-rose-600 mb-2'>12</p>
                        <p className='text-gray-600 font-medium'>Close Circle</p>
                        <div className='mt-3 text-sm text-rose-400'>⭐ VIP Besties ⭐</div>
                    </div>
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center 
                                  shadow-lg hover:shadow-2xl transition-all duration-300 
                                  hover:scale-105 border border-purple-100'>
                        <div className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-16 h-16 
                                      flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <MdLocalFlorist className='text-purple-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-purple-600 mb-2'>48</p>
                        <p className='text-gray-600 font-medium'>Memory Makers</p>
                        <div className='mt-3 text-sm text-purple-400'>🌸 Unforgettable moments 🌸</div>
                    </div>
                    <div className='group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center 
                                  shadow-lg hover:shadow-2xl transition-all duration-300 
                                  hover:scale-105 border border-pink-100'>
                        <div className='bg-gradient-to-br from-pink-100 to-purple-100 rounded-full w-16 h-16 
                                      flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                            <FaGlassCheers className='text-pink-500 text-3xl' />
                        </div>
                        <p className='text-4xl font-bold text-pink-600 mb-2'>15</p>
                        <p className='text-gray-600 font-medium'>Adventure Buddies</p>
                        <div className='mt-3 text-sm text-pink-400'>🎉 Let's make memories 🎉</div>
                    </div>
                </div>
                <div className='mt-16 text-center'>
                    <div className='inline-flex gap-2 text-pink-300'>
                        <FaHeart className='animate-pulse' />
                        <FaHeart className='animate-pulse delay-100' />
                        <FaHeart className='animate-pulse delay-200' />
                    </div>
                    <p className='text-sm text-gray-500 mt-4'></p>
                    Every friendship is a beautiful flower worth nurturing 💕
                </div>
            </div>

        </div>
    );
};

export default Banner;