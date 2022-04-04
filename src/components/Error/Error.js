import React from 'react';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-52'>
            <div>
                <h1 className='text-red-600 text-4xl font-mono'>Error 404</h1>
            </div>
            <div>
                <h1 className='text-2xl font-mono'>The page you are looking for can't be found</h1>
            </div>
        </div>
    );
};

export default Error;