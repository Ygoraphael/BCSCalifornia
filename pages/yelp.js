import { useEffect, useState } from 'react';

function Yelp() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET;
    
    useEffect(() => {
        const APIYelp = async () => {
            try {
                const response = await fetch(`/Reviews`, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    }
                });
                const json = await response.json();
                setReviews(json.reviews);
                setIsLoading(false);
            } catch (error) {
                console.error('error:', error);
            }
        };

        if (isLoading) {
            APIYelp();
        }
    }, [apiKey, isLoading]);

    useEffect(() => {
        setIsLoading(true); 
    }, []);

    return (
        <div className="Container">
            YELP REVIEWS
            {reviews?.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.user.name}</p>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Yelp;