import React from 'react';

const ReviewCard = (props) => {

    const { name, picture, about } = props.review;

    return (

        <div className='grid grid-cols-12'>
            <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20 grid col-span-4 relative">
                <div class="flex justify-center md:justify-end -mt-16">
                    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={picture} alt='' />
                </div>
                <div>
                    <h2 class="text-gray-800 text-3xl font-bold">{name}</h2>
                    <p class="mt-2 text-gray-700">{about}</p>
                </div>
                <div class="flex justify-end mt-4">
                    Rating:
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;


