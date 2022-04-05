import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewCard = (props) => {

    const { name, picture, about, rating } = props.review;

    return (

        <div className='flex justify-center items-center my-5'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={picture} alt="" />
                    <h5 className="mb-1 text-xl font-medium text-black">{name}</h5>
                    <div className="flex flex-col mt-4 space-x-3 lg:mt-6">
                        <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black ">{about}</p>
                        <div className="flex justify-center mt-4">
                            <h4 className='text-gray-700'>Rating: </h4><Rating
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                readonly
                            ></Rating>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;

