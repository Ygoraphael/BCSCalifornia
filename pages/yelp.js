import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState([]);
    const apiKey = process.env.API_SECRET;
    console.log(apiKey)
    
    const APIYelp = async () => {
        fetch(`/Reviews`, {
            headers: {
                Authorization: `Bearer tEOdJQPpkqhMr5iQswLX-vHYq5C4vy-C65X0EjO07sfTqX1QMQD-oLFApPj0h4SxJw5Jy6gh5YKsGE5OrjXpagmiwVXmluFUBtYm4f9o_kPGQ1FBTtgLVIuXYAtOY3Yx`,
            }
        }).then(res => res.json())
        .then(json => { setReviews(json.reviews) })
        .catch(err => console.error('error:' + err));
    }

    useEffect(() => { APIYelp(); }, []);

    return (
        <div className="Container">
            YELP REVIEWS
            { !reviews && <p> VAZIO</p> }
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
