import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkTailwindClasses = 'mr-2 rounded-lg px-3 py-1 shadow bg-slate-500 text-white hover:bg-white hover:text-black hover:shadow-lg'
    return (
        <div className='bg-slate-300 p-7 flex justify-center items-center shadow-lg'>
            <ul>
                <Link className={linkTailwindClasses} to="/">Home</Link>
                <Link className={linkTailwindClasses} to="/reviews">Reviews</Link>
                <Link className={linkTailwindClasses} to="/dashboard">Dashboard</Link>
                <Link className={linkTailwindClasses} to="/blogs">Blogs</Link>
            </ul>
        </div>
    );
};

export default Header;