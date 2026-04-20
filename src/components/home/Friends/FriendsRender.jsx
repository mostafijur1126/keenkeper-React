
import { NavLink } from 'react-router';
import useFriends from '../../../hooks/useFriends';


const FriendsRender = () => {
    const { friends } = useFriends();
    // console.log(friends);
    return (
        <div className='bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 min-h-screen py-8 sm:py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-8 sm:mb-12'>
                    <div className='flex justify-center gap-2 mb-4'>
                        <span className='text-pink-400 text-2xl'>💕</span>
                        <span className='text-rose-400 text-2xl'>👯‍♀️</span>
                        <span className='text-pink-400 text-2xl'>💕</span>
                    </div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent font-serif'>
                        My Besties Collection
                    </h1>
                    <p className='text-gray-500 mt-2 text-sm sm:text-base'>✨ {friends.length} beautiful souls in my circle ✨</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8'>
                    {friends.map(friend => (
                        <NavLink
                            to={`/${friend.id}`}
                            key={friend.id}
                            className='group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100'>
                            <div className='relative overflow-hidden h-64 bg-gradient-to-br from-pink-100 to-rose-100'>
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                                <div className='absolute top-3 right-3'>
                                    {
                                        friend.status === 'active' ? (
                                            <span className='bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md'>
                                                🟢 Active
                                            </span>
                                        ) : friend.status === 'busy' ? (
                                            <span className='bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md'>
                                                🟠 Busy
                                            </span>
                                        ) : (
                                            <span className='bg-gray-500 text-white text-xs px-2 py-1 rounded-full shadow-md'>
                                                ⚪ Away
                                            </span>
                                        )
                                    }
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            <div className='p-5 text-center bg-gradient-to-b from-white to-pink-50'>
                                <h1 className='text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors'>{friend.name}</h1>
                                <div className='flex items-center justify-center gap-2 text-gray-500 mb-3'>
                                    <span className='text-pink-400'>💬</span>
                                    <p className='text-sm'>
                                        {friend.days_since_contact === 0 ? (<span className='text-green-600 font-semibold'>Today! 🎉</span>)
                                            : (<span>{friend.days_since_contact} days ago</span>)}
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 justify-center mb-3'>
                                    {friend.tags.slice(0, 2).map((tag, idx) => (<span key={idx} className='text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium'>
                                        #{tag}
                                    </span>))}
                                    {friend.tags.length > 2 && (
                                        <span className='text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600'>
                                            +{friend.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                                <div className='mt-3 text-xs text-gray-400 group-hover:text-pink-400 transition-colors'>
                                    Click to view profile 💕
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                {friends.length === 0 && (
                    <div className='text-center py-20'>
                        <div className='text-6xl mb-4'>💔</div>
                        <p className='text-gray-500 text-lg'>No friends yet. Time to make some connections!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FriendsRender;