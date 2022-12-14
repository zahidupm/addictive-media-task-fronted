import React from 'react';
import { FaAlignLeft, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className=''>
                <FaAlignLeft className='w-6 h-6 cursor-pointer' />
            </div>
            <div className='font-bold text-2xl'>RP Alloys</div>
            <div>Get in touch<FaArrowRight className='inline pl-2' />  </div>
        </div>
    );
};

export default Navbar;