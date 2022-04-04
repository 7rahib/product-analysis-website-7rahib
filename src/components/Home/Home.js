import React from 'react';
import product from '../../images/product.png'

const Home = () => {
    return (
        <div className='flex items-center justify-evenly m-7 p-7'>
            <div className=''>
                <h1 className='text-6xl font-bold '>MacBook <span className='underline text-blue-600'>Air</span></h1>
                <h1 className='text-6xl font-bold text-amber-500'><span>The Future</span></h1>
                <p className='my-5 w-96'>The MacBook Air is a line of notebook computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure.</p>
            </div>
            <div className='h-2/4 w-2/4'>
                <img src={product} alt="Laptop" />
            </div>
        </div >
    );
};

export default Home;