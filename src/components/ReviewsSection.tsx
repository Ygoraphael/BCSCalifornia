import React, { useState, useEffect } from 'react';
import googleReviews from '../data/google_data.json';

// Theme Colors
const colors = {
  bgWhite: '#FFFFFF',
  textHeader: '#1A1A1A',
  textBody: '#4A4A4A',
  accentRed: '#C54B43',
  accentGold: '#FFD700',
  textMedium: '#666666',
  cardShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  url?: string;
  platform: 'Google' | 'Yelp';
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} style={{ 
        color: i < rating ? colors.accentGold : '#E0E0E0', 
        fontSize: '1.2em' 
      }}>
        ★
      </span>
    );
  }
  return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textLimit = 180;
  const showReadMore = review.comment.length > textLimit;
  const displayText = !isExpanded && showReadMore 
    ? review.comment.substring(0, textLimit) + '...' 
    : review.comment;

  return (
    <div style={{
      backgroundColor: colors.bgWhite,
      borderRadius: '12px',
      padding: '30px',
      marginBottom: '20px',
      boxShadow: colors.cardShadow,
      textAlign: 'left',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto 20px',
      border: '1px solid #EDEDED',
      fontFamily: 'var(--font-primary, "Open Sans", sans-serif)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: '1.1em', 
          fontWeight: 'bold', 
          color: colors.textHeader,
          fontFamily: 'var(--font-headings, "Montserrat", sans-serif)'
        }}>
          {review.author}
        </h3>
        <StarRating rating={review.rating} />
      </div>
      <p style={{ 
        color: colors.textBody, 
        lineHeight: '1.6', 
        fontSize: '1em',
        margin: 0 
      }}>
        "{displayText}"
        {showReadMore && (
          <button 
            onClick={() => review.platform === 'Yelp' ? window.open(review.url, '_blank') : setIsExpanded(!isExpanded)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: colors.accentRed, 
              cursor: 'pointer', 
              fontWeight: '600',
              padding: '0 5px',
              fontFamily: 'inherit'
            }}
          >
            {review.platform === 'Yelp' ? 'Read More' : (isExpanded ? 'Show Less' : 'Read More')}
          </button>
        )}
      </p>
    </div>
  );
};

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState<'Google' | 'Yelp'>('Yelp');
  const [yelpReviews, setYelpReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === 'Yelp' && yelpReviews.length === 0) {
      const fetchYelp = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/get-reviews');
          if (response.ok) {
            const data = await response.json();
            setYelpReviews(data);
          }
        } catch (error) {
          console.error("Yelp fetch error:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchYelp();
    }
  }, [activeTab, yelpReviews.length]);

  const googleMapsUrl = "https://www.google.com/maps/place/Broadway+Clean+Services/@37.9869329,-122.3287592,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x808577f029c8f601:0x667218de0997a5ba!8m2!3d37.9869329!4d-122.3261789!16s%2Fg%2F11y0syzpgn?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="reviews" style={{
      padding: '80px 20px',
      backgroundColor: colors.bgWhite, 
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-headings, "Montserrat", sans-serif)',
          fontSize: 'clamp(2em, 5vw, 2.8em)',
          color: colors.textHeader,
          marginBottom: '15px'
        }}>
          What Our Clients Say
        </h2>
        <p style={{ 
          color: colors.textBody, 
          fontSize: '1.1em', 
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          We pride ourselves on delivering exceptional service. Here's what people are saying about us.
        </p>

        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {['Google', 'Yelp'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'Google' | 'Yelp')}
              style={{
                padding: '10px 30px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: activeTab === tab ? colors.accentRed : 'transparent',
                color: activeTab === tab ? '#FFF' : colors.textMedium,
                fontWeight: 'bold',
                fontSize: '1.1em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-primary, "Open Sans", sans-serif)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div style={{ minHeight: '300px' }}>
          {loading ? (
            <div style={{ padding: '50px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                border: '3px solid #f3f3f3', 
                borderTop: `3px solid ${colors.accentRed}`, 
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite',
                margin: '0 auto'
              }} />
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
          ) : (
            <>
              {activeTab === 'Google' && (
                googleReviews.map((r: any) => <ReviewCard key={r.id} review={{...r, platform: 'Google'}} />)
              )}
              {activeTab === 'Yelp' && (
                yelpReviews.length > 0 ? (
                  yelpReviews.map((r) => <ReviewCard key={r.id} review={r} />)
                ) : (
                  <div style={{ padding: '40px', color: colors.textBody }}>
                    <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
                      No reviews found on Yelp at the moment.
                    </p>
                    <a 
                      href="https://www.yelp.com/biz/broadway-clean-services-richmond-6" 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        color: colors.accentRed,
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                      }}
                    >
                      Check our Yelp page directly
                    </a>
                  </div>
                )
              )}
              
              {activeTab === 'Google' && (
                <div style={{ marginTop: '20px' }}>
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      color: colors.accentRed,
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      fontSize: '1.1em',
                      borderBottom: `2px solid ${colors.accentRed}`
                    }}
                  >
                    View more on Google Maps
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

