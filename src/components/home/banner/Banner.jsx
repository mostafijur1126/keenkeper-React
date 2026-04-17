import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10' >
            <div className='text-center py-20'>
                <h1>Friends to keep close in your life</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                <button>Add a Friend</button>
            </div>
            <div className='grid justify-center gap-5 grid-cols-3'>
                <div className='border'>
                    <p>10</p>
                    <p>Total Friends</p>
                </div>
                <div className='border'>
                    <p>10</p>
                    <p>Total Friends</p>
                </div>
                <div className='border'>
                    <p>10</p>
                    <p>Total Friends</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;