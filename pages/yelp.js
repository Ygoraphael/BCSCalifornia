import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState(null);
    
    const APIYelp = async () => {
        fetch(`https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews`, {
            headers: {
                Authorization: `Bearer tEOdJQPpkqhMr5iQswLX-vHYq5C4vy-C65X0EjO07sfTqX1QMQD-oLFApPj0h4SxJw5Jy6gh5YKsGE5OrjXpagmiwVXmluFUBtYm4f9o_kPGQ1FBTtgLVIuXYAtOY3Yx`,
                Origin: 'localhost',
                withCredentials: true,
            }
        }).then(res => res.json())
        .then(json => {
            console.log(json.reviews);
            setReviews(json.reviews);
        })
        .catch(err => console.error('error:' + err));    
    }

    useEffect(() => { APIYelp() }, []);

    return (
        <div className="Container">
            YELP REVIEWS
            { !reviews && <p> VAZIO</p> }
            {reviews && reviews.map((item, index) => {
                <div key={index}>
                    <p>{item.user.name}</p>
                    <p>{item.text}</p>
                </div>
            })}
        </div>
    );
}
