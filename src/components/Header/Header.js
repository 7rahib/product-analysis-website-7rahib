import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkClasses = 'mr-2 rounded-lg px-3 py-1 shadow bg-slate-500 text-white hover:bg-white hover:text-black hover:shadow-lg'
    return (
        <div className='bg-slate-300 p-5 flex justify-center items-center'>
            <ul>
                <Link className={linkClasses} to="/">Home</Link>
                <Link className={linkClasses} to="/reviews">Reviews</Link>
                <Link className={linkClasses} to="/dashboard">Dashboard</Link>
                <Link className={linkClasses} to="/blogs">Blogs</Link>
            </ul>
        </div>
    );
};

export default Header;