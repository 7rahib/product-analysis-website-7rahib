import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();

    return (
        <div>
            <div>
                <h3 className='text-center font-mono text-3xl my-7'>What are the customer's saying ?</h3>
            </div>
            <div>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;