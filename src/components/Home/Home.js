import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import product from '../../images/product.png'
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex items-center justify-evenly m-7 p-7'>
                <div className='grid-cols-6'>
                    <h1 className='text-6xl font-bold '>MacBook <span className='underline text-blue-600'>Air</span></h1>
                    <h1 className='text-6xl font-bold text-amber-500'><span>The Future</span></h1>
                    <p className='my-5 w-96'>The MacBook Air is a line of notebook computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure.</p>
                </div>
                <div className='h-2/4 w-2/4'>
                    <img src={product} alt="Laptop" />
                </div>
            </div>
            <div>
                <h3 className='text-center font-mono text-3xl my-3'>Customer's opinion(3)</h3>
            </div>
            <div>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <button onClick={() => navigate('/reviews')} className='mr-2 rounded-lg px-5 py-2 bg-slate-500 font-mono text-white hover:bg-slate-600 hover:text-white hover:shadow-lg hover:font-bold hover:underline'>See All</button>
            </div>
        </div>
    );
};

export default Home;