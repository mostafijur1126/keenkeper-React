import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendContext';
import { FaSearch, FaFilter, FaPhoneAlt, FaRegSmile, FaHeart, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { MdClear } from 'react-icons/md';
import { GiRose } from 'react-icons/gi';

const Timeline = () => {
    const { contectNow } = useContext(FriendsContext);
    const [serch, setSerch] = useState('');
    const [type, setType] = useState('all');
    
    const searchRes = contectNow.filter(item => {
        const matchName = item.name.toLowerCase().includes(serch.toLowerCase());
        const matchType = type === "" || type === "all" ? true : item.type === type;
        return matchName && matchType
    });
    
    // Get unique types for filter chips
    const uniqueTypes = ['all', ...new Set(contectNow.map(item => item.type))];
    
    // Function to get icon based on type
    const getTypeIcon = (type) => {
        switch(type) {
            case 'call': return <FaPhoneAlt className="text-green-500" />;
            case 'text': return <IoIosText className="text-blue-500" />;
            case 'video': return <IoVideocam className="text-purple-500" />;
            default: return <FaHeart className="text-pink-500" />;
        }
    };
    
    // Function to get gradient based on type
    const getTypeGradient = (type) => {
        switch(type) {
            case 'call': return 'from-green-400 to-green-500';
            case 'text': return 'from-blue-400 to-blue-500';
            case 'video': return 'from-purple-400 to-purple-500';
            default: return 'from-pink-400 to-rose-500';
        }
    };
    
    return (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-10'>
                    <div className='flex justify-center gap-2 mb-4'>
                        <GiRose className='text-pink-400 text-3xl animate-bounce' />
                        <FaHeart className='text-rose-400 text-3xl animate-pulse' />
                        <GiRose className='text-pink-400 text-3xl animate-bounce' />
                    </div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent font-serif'>
                        Connection Timeline
                    </h1>
                    <p className='text-gray-600 mt-2'>✨ Every moment shared with your besties ✨</p>
                </div>

                {/* Search and Filter Section */}
                <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-pink-100'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* Search Input */}
                        <div className='flex-1 relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <FaSearch className='text-pink-400' />
                            </div>
                            <input 
                                value={serch} 
                                onChange={e => setSerch(e.target.value)} 
                                type="text" 
                                placeholder='🔍 Search your bestie by name...' 
                                className='w-full pl-10 pr-10 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors bg-white/90'
                            />
                            {serch && (
                                <button 
                                    onClick={() => setSerch('')}
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                >
                                    <MdClear className='text-gray-400 hover:text-pink-500 transition-colors' />
                                </button>
                            )}
                        </div>

                        {/* Filter Toggle Buttons */}
                        <div className='flex gap-2 overflow-x-auto pb-2 lg:pb-0'>
                            {uniqueTypes.map((filterType) => (
                                <button
                                    key={filterType}
                                    onClick={() => setType(filterType)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2
                                        ${type === filterType 
                                            ? `bg-gradient-to-r ${getTypeGradient(filterType)} text-white shadow-lg transform scale-105` 
                                            : 'bg-white/90 text-gray-600 hover:bg-pink-100 border border-pink-200'
                                        }`}
                                >
                                    {filterType !== 'all' && getTypeIcon(filterType)}
                                    <span className="capitalize">{filterType}</span>
                                    {filterType === 'all' && <FaFilter size={12} />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className='mb-6 flex justify-between items-center flex-wrap gap-2'>
                    <div className='flex items-center gap-2 text-gray-600'>
                        <FaRegSmile className='text-pink-500' />
                        <p className='font-medium'>
                            Found <span className='text-pink-600 font-bold'>{searchRes.length}</span> connection{searchRes.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    {searchRes.length > 0 && (
                        <div className='text-sm text-gray-500'>
                            Showing latest interactions first
                        </div>
                    )}
                </div>

                {/* Timeline Content */}
                {searchRes.length > 0 ? (
                    <div className='space-y-4'>
                        {searchRes.map((item, ind) => (
                            <div 
                                key={ind} 
                                className='group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100 overflow-hidden'
                            >
                                <div className='flex items-center gap-5 p-5 flex-wrap sm:flex-nowrap'>
                                    {/* Avatar Section */}
                                    <div className='relative'>
                                        <div className='w-20 h-20 rounded-full overflow-hidden ring-4 ring-pink-200 group-hover:ring-pink-400 transition-all'>
                                            <img 
                                                src={item.picture} 
                                                alt={item.name} 
                                                className='rounded-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                            />
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${getTypeGradient(item.type)} flex items-center justify-center shadow-md`}>
                                            {getTypeIcon(item.type)}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className='flex-1'>
                                        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                                            <div>
                                                <p className='text-gray-800 font-semibold text-lg'>
                                                    <span className="capitalize">{item.type}</span> 
                                                    <span className='text-gray-600'> with </span>
                                                    <span className='text-pink-600 font-bold'>{item.name}</span>
                                                </p>
                                                <div className='flex items-center gap-4 mt-1'>
                                                    <div className='flex items-center gap-1 text-gray-500 text-sm'>
                                                        <FaClock size={12} />
                                                        <span>{item.date}</span>
                                                    </div>
                                                    {item.type === 'call' && (
                                                        <span className='text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full'>📞 Phone Call</span>
                                                    )}
                                                    {item.type === 'text' && (
                                                        <span className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full'>💬 Text Message</span>
                                                    )}
                                                    {item.type === 'video' && (
                                                        <span className='text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full'>🎥 Video Call</span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Decorative Element */}
                                            <div className='text-pink-300 group-hover:text-pink-500 transition-colors'>
                                                <FaHeart className='text-xl animate-pulse' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hover Border Effect */}
                                <div className={`h-1 bg-gradient-to-r ${getTypeGradient(item.type)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-pink-100'>
                        <div className='text-6xl mb-4 animate-bounce'>💕</div>
                        <h3 className='text-2xl font-bold text-gray-700 mb-2'>No Connections Yet</h3>
                        <p className='text-gray-500 mb-4'>Start reaching out to your besties to build your timeline!</p>
                        <div className='inline-flex gap-2 text-pink-300'>
                            <FaHeart className='animate-pulse' />
                            <FaHeart className='animate-pulse delay-100' />
                            <FaHeart className='animate-pulse delay-200' />
                        </div>
                    </div>
                )}

                {/* Decorative Bottom Element */}
                {searchRes.length > 0 && (
                    <div className='mt-12 text-center'>
                        <div className='inline-flex gap-2 text-pink-300'>
                            <div className='w-2 h-2 rounded-full bg-pink-400 animate-pulse'></div>
                            <div className='w-2 h-2 rounded-full bg-rose-400 animate-pulse delay-100'></div>
                            <div className='w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-200'></div>
                            <div className='w-2 h-2 rounded-full bg-pink-400 animate-pulse delay-300'></div>
                        </div>
                        <p className='text-xs text-gray-400 mt-4'>
                            Every connection strengthens your friendship 💪
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;