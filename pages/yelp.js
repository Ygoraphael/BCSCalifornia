import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState([]);
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET;
    
    const APIYelp = async () => {
        fetch(`/Reviews`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
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
