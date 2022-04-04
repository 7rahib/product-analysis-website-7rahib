import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();

    return (
        <div>
            {
                reviews.map(review => <ReviewCard
                    key={review.id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;