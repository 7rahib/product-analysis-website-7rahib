import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewCard = (props) => {

    const { name, picture, about, rating } = props.review;

    return (

        <div>
            <div className="p-6">

                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-start my-3">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-slate-300" src={picture} alt='' />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
                    <p className="text-xl text-gray-700">{about}</p>
                    <div className="flex justify-start mt-4">
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
    );
};

export default ReviewCard;

