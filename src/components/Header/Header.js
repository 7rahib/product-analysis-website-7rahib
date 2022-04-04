import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkTailwindClasses = 'mr-2 rounded-lg px-5 py-2 bg-slate-500 font-mono text-white hover:bg-white hover:text-black hover:shadow-lg hover:font-bold'
    return (
        <div className='bg-slate-200 p-7 flex flex-col justify-center items-center shadow-lg'>
            <div>
                <h1 className='text-4xl mb-5 font-bold font-mono hover:underline'>Product Analysis</h1>
            </div>
            <div>
                <ul>
                    <Link className={linkTailwindClasses} to="/">Home</Link>
                    <Link className={linkTailwindClasses} to="/reviews">Reviews</Link>
                    <Link className={linkTailwindClasses} to="/dashboard">Dashboard</Link>
                    <Link className={linkTailwindClasses} to="/blogs">Blogs</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;