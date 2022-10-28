module.exports = {
  async rewrites() {
    return [
      {
        source: '/Reviews',
        destination: 'https://api.yelp.com/v3/businesses/broadway-clean-services-richmond-6/reviews',
      },
    ]
  },
}