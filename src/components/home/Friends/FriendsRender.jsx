
import { NavLink } from 'react-router';
import useFriends from '../../../hooks/useFriends';


const FriendsRender = () => {
    const {friends} = useFriends();
    // console.log(friends);
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl py-5'>friend list</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {friends.map(friend => (
                        <NavLink to={`/${friend.id}`} key={friend.id} className='p-5 bg-gray-50 rounded shadow'>
                            <div>
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-xl font-bold'>{friend.name}</h1>
                                <p>{friend.days_since_contact}d ago</p>
                                <div><p>{friend.tags[0]}</p></div>
                                <div><p>{friend.status}</p></div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendsRender;