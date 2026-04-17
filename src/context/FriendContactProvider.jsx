import React, {useState } from 'react';
import { FriendsContext } from './FriendContext';



const FriendContactProvider = ({children}) => {
    const [contectNow , setContectNow] = useState([]);
    const data = {
        contectNow, setContectNow
    }
    return <FriendsContext.Provider value={data}>
        {children}
    </FriendsContext.Provider>
};

export default FriendContactProvider;