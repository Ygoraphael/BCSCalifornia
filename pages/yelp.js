import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState([]);
    
    const APIYelp = async () => {
        const data = [];
        await fetch(`/Reviews`, {
            headers: {
                Authorization: `Bearer tEOdJQPpkqhMr5iQswLX-vHYq5C4vy-C65X0EjO07sfTqX1QMQD-oLFApPj0h4SxJw5Jy6gh5YKsGE5OrjXpagmiwVXmluFUBtYm4f9o_kPGQ1FBTtgLVIuXYAtOY3Yx`,
                Origin: 'localhost',
                "Content-Type": "application/json",
                withCredentials: true,
            }
        }).then(res => res.json())
        .then(json => {
            console.log("antes")
            data = json.reviews;
        })
        .catch(err => console.error('error:' + err));    
        setReviews(data);
        console.log(data);
        console.log(reviews);
    }

    useEffect(() => { 
        APIYelp().then(console.log("reviews"));        
    }, []);

    return (
        <div className="Container">
            YELP REVIEWS
            { !reviews && <p> VAZIO</p> }
            {reviews?.map((item, index) => {
                <div key={index}>
                    <p>{item.user.name}</p>
                    <p>{item.text}</p>
                </div>
            })}
        </div>
    );
}
