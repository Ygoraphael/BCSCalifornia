import { useEffect, useState } from 'react';

export default function Yelp() {
    const [reviews, setReviews] = useState([]);
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
                setIsLoading(false); // Marque isLoading como false após o carregamento dos dados
            } catch (error) {
                console.error('error:', error);
            }
        };

        if (isLoading) {
            APIYelp();
        }
    }, [apiKey]); // Remova isLoading do array de dependências

    useEffect(() => {
        setIsLoading(true); // Marque isLoading como true para iniciar a chamada à API
    }, []); // Execute apenas na montagem do componente

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
