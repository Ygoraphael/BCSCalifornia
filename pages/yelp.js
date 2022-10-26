import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState(null);
    //https://cors-anywhere.herokuapp.com/corsdemo            ativar cors
    const ApiReviews = async () => {
        const apiKey = process.env.NEXT_PUBLIC_API_SECRET;
        console.log(apiKey);
        try {
                const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/broadway-clean-services-richmond-6/reviews";
                const res = await fetch(`https://api.yelp.com/v3/businesses/broadway-clean-services-richmond-6/reviews`,
                                        {
                                            headers: {
                                                'Authorization': `Bearer ${apiKey}`
                                            },
                                            method: 'GET',
                                            mode : "no-cors"
                                        }
                                    );
                let data = await res.json();
                console.log(data.reviews);
                setReviews(data.reviews);
                if (!reviews)
                {
                    console.log(array.length(reviews));
                    reviews.map((item) => {
                        console.log(item.user.name);
                        console.log(item.text);
                    })
                }
                else console.log("vazio")
        } catch (err) {
          console.error(err);
        }
    };


    const RapidAPIYelp = async () => {
        const apiKey = process.env.NEXT_PUBLIC_API_SECRET;
        /*const fetch = require('node-fetch');*/

        const encodedParams = new URLSearchParams();
        encodedParams.append("bussinessId", "broadway-clean-services-richmond-6");
        encodedParams.append("accessToken", "tEOdJQPpkqhMr5iQswLX-vHYq5C4vy-C65X0EjO07sfTqX1QMQD-oLFApPj0h4SxJw5Jy6gh5YKsGE5OrjXpagmiwVXmluFUBtYm4f9o_kPGQ1FBTtgLVIuXYAtOY3Yx");

        const url = "/getBusinessReviews";
        //const urlcors = `https://cors-anywhere.herokuapp.com/https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinessReviews`;
        const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '40a06c9448mshe8fd4283f5ef8e6p1b24fdjsn500bc8b5e7a0',
            'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
        },
        body: encodedParams
        };
        console.log("teste");

        /*fetch("/fact", options)
            .then(res => console.log(res.json()))
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));*/
    /*        fetch("/Reviews")
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
*/
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    Origin: 'localhost',
                    withCredentials: true,
                }
            }).then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
        /*let body = {
            bussinessId : "broadway-clean-services-richmond-6",
            accessToken : "tEOdJQPpkqhMr5iQswLX-vHYq5C4vy-C65X0EjO07sfTqX1QMQD-oLFApPj0h4SxJw5Jy6gh5YKsGE5OrjXpagmiwVXmluFUBtYm4f9o_kPGQ1FBTtgLVIuXYAtOY3Yx"
        }
        const response = await fetch('https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinessReviews', {
                                        method: 'POST',
                                        headers: {'content-type': 'application/x-www-form-urlencoded',
                                                    'X-RapidAPI-Key': '40a06c9448mshe8fd4283f5ef8e6p1b24fdjsn500bc8b5e7a0',
                                                    'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
                                                 },
                                        body: JSON.stringify(body)
                                    });
        let data = await response.json();
        console.log(data)*/
    }

    useEffect(() => { RapidAPIYelp() }, []);

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
