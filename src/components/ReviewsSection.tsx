import React from 'react';

// Color palette (can be imported from a central theme file in a larger app)
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
  cardBackground: '#2C2C2C', // Slightly lighter than primaryDark for cards
  starActive: '#FFD700', // Gold for active stars, good contrast on dark
  starInactive: '#555555', // Darker gray for inactive stars
};

interface ReviewCardProps {
  platform: string;
  author: string;
  rating: number;
  comment: string;
  platformAccentColor: string; // Use a theme-consistent accent color
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} style={{ color: i < rating ? colors.starActive : colors.starInactive, fontSize: '1.4em', marginRight: '2px' }}>
        ★
      </span>
    );
  }
  return <div style={{ marginBottom: '10px' }}>{stars}</div>;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ platform, author, rating, comment, platformAccentColor }) => (
  <div style={{
    backgroundColor: colors.cardBackground,
    borderLeft: `4px solid ${platformAccentColor}`,
    padding: '25px',
    margin: '15px',
    borderRadius: '8px',
    flex: '1 1 320px',
    maxWidth: '400px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = `0 8px 20px ${platformAccentColor === colors.accentPink ? 'rgba(255, 64, 129, 0.3)' : 'rgba(173, 255, 47, 0.2)'}`;
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  }}
  >
    <h3 style={{
      marginTop: '0',
      marginBottom: '10px',
      color: platformAccentColor, 
      fontFamily: 'var(--font-headings)', 
      fontSize: '1.5em',
      borderBottom: `1px solid ${colors.textMedium}`,
      paddingBottom: '8px'
    }}>
      {platform} Review
    </h3>
    <StarRating rating={rating} />
    <p style={{ fontStyle: 'italic', margin: '15px 0', color: colors.textLight, fontSize: '1em', lineHeight: '1.6' }}>"{comment}"</p>
    <p style={{ textAlign: 'right', fontWeight: 'bold', color: colors.textMedium, fontFamily: 'var(--font-primary)', fontSize: '0.9em' }}>- {author}</p>
  </div>
);

const ReviewsSection = () => {
  const reviews = [
    {
      platform: "Google",
      author: "John D.",
      rating: 5,
      comment: "Broadway Clean Services did an amazing job on our office! The team was professional, punctual, and incredibly thorough. Our workspace has never looked better. Highly recommend!",
      platformAccentColor: colors.accentGreen // Using theme green for Google
    },
    {
      platform: "Yelp",
      author: "Sarah L.",
      rating: 5,
      comment: "I hired them for a deep clean before moving into my new apartment, and I was blown away by the results. Every nook and cranny was spotless. Excellent service and great value!",
      platformAccentColor: colors.accentPink // Using theme pink for Yelp
    },
    {
      platform: "Google",
      author: "Mike P.",
      rating: 4,
      comment: "Very happy with the regular cleaning service we receive for our home. They are reliable and always do a consistent job. Sometimes minor spots are missed but they are quick to rectify.",
      platformAccentColor: colors.accentGreen
    },
    {
      platform: "Yelp",
      author: "Emily B.",
      rating: 5,
      comment: "Fantastic carpet cleaning service! Our old carpets look brand new again. The technician was friendly and very efficient. Will definitely use their services again.",
      platformAccentColor: colors.accentPink
    }
  ];

  return (
    <section id="reviews" style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#222222', // Slightly different dark shade for variation
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '50px', 
        color: colors.textLight
      }}>
        What Our <span style={{ color: colors.accentPink }}>Clients Say</span>
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {reviews.map(review => (
          <ReviewCard
            key={`${review.platform}-${review.author}`}
            platform={review.platform}
            author={review.author}
            rating={review.rating}
            comment={review.comment}
            platformAccentColor={review.platformAccentColor}
          />
        ))}
      </div>
      <p style={{ 
        marginTop: '50px',
        fontSize: 'clamp(1em, 2vw, 1.1em)', 
        color: colors.textMedium,
        fontFamily: 'var(--font-primary)',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        These are just a few examples of the positive feedback we receive. We strive for 100% customer satisfaction!
      </p>
    </section>
  );
};

export default ReviewsSection;

