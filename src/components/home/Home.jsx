import React from 'react';
import Banner from './banner/Banner';
import FriendsRender from './Friends/FriendsRender';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FriendsRender></FriendsRender>
        </div>
    );
};

export default Home;