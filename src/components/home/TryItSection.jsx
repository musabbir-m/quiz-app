import { Button } from 'antd';
// import React from 'react';

const TryItSection = () => {
    return (
        <div className=' text-slate-50 bg-gradient-to-r from-green-500 via-teal-500  to-violet-500'>
            <div className='text-center py-16'>
                <p className=' text-xs font-thin'>GET A TESTE OF IT</p>
                <p className='text-5xl my-16'>Try it out Now</p>
                <p className='my-12 font-thin'>If you want to use all of the available features create a an account with us or login to the one you already have</p>
                <Button className=' w-52 bg-white border text-gray-600  text-md  h-10 font-medium' type="primary" shape="round">
                       LOGIN
                    </Button>
            </div>
        </div>
    );
};

export default TryItSection;