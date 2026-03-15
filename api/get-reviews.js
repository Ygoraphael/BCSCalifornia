import axios from 'axios';

export default async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const YELP_API_KEY = process.env.YELP_API_KEY;
  const businessId = 'broadway-clean-services-richmond-6';

  if (!YELP_API_KEY) {
    return res.status(500).json({ error: 'Yelp API Key is not configured' });
  }

  try {
    const response = await axios.get(`https://api.yelp.com/v3/businesses/${businessId}/reviews`, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    });

    const reviews = response.data.reviews.map(review => ({
      id: review.id,
      author: review.user.name,
      rating: review.rating,
      comment: review.text,
      profileImage: review.user.image_url,
      url: review.url,
      platform: 'Yelp'
    }));

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching Yelp reviews:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

