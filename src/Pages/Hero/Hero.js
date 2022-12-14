import React from 'react';

const Hero = () => {
    return (
        <div className="mb-12">
            <div className='grid grid-cols-6 gap-4 mt-24'>
                <div className='col-start-2 col-span-4'>
                    <div className='flex justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Some of the best of the industries experts</h2>
                    </div>
                    <div></div>
                    </div>
                    <div className='flex justify-between'>
                        <div></div>
                        <div></div>
                        <div>
                            <p>We all are the best quality of experiences people of the our table and our working environment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-4 mt-24'>
                <div className='col-start-2 col-span-4'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h2 className='text-4xl font-bold'>20 <span className='text-red-400'>+</span></h2>
                            <p>Location Word Wide</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold'>23 <span className='text-red-400'>+</span></h2>
                            <p>Location Word Wide</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold'>50 <span className='text-red-400'>+</span></h2>
                            <p>Location Word Wide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;