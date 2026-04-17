import React, { useEffect, useState } from 'react';

const useFriends = () => {
    const [friends , setFriends] = useState([]);
        useEffect(()=>{
            fetch('/data.json')
            .then(res => res.json())
            .then(data => setFriends(data));
        },[]);
    return {friends};
};

export default useFriends;