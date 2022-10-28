module.exports = {
  async rewrites() {
    return [
      {
        source: '/Reviews',
        destination: 'https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews',
      },
    ]
  },
}