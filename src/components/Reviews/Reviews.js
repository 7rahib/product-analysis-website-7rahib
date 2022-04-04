import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <div>
            {
                reviews?.map(review => <h1>{review.name}</h1>)
            }
        </div>
    );
};

export default Reviews;