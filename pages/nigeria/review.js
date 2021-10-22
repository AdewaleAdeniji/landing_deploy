import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Reviews = (props) => {
    return (
        <Fade duration={3000}bottom>
        <div className="reviewsection sareview">
            <Fade duration={3000}right>
            <div className="review-title">
                Wonderful words from our users
            </div>
            </Fade>
            <div className="reviews">
                <Flip left>
                <div className="review">
                    <div className="review-head">
                        <div className="review-rate">
                            <h1>4.3</h1>
                            <img src="/images/stars.svg" alt="Star"/>
                        </div>
                        <div className="review-app">
                            <img src="/images/playstoreicon.svg" alt="Playstore Icon"/>
                            Playstore Review
                        </div>

                    </div>
                    <div className="reviewtext">
                    “Its fast and reliable, no need to start asking people to help me send money to nigeria now.”
                    
                    <h4 className="reviewer">
                        {/* Bayonle A, Houston TX */}
                    </h4>
                    </div>
                </div>
                </Flip>
                <Flip right>
                <div className="review">
                    <div className="review-head">
                        <div className="review-rate">
                            <h1>4.6</h1>
                            <img src="/images/stars.svg"/>
                        </div>
                        <div className="review-app">
                            <img src="/images/applestoreicon.svg"/>
                            Applestore Review
                        </div>

                    </div>
                    <div className="reviewtext">
                    “Easy and straight forward app addressing FX transfer challenges across international borders. No regrets whatsoever since I started using and customer service is top-notch through email and telegram channels..”
                    
                    <h4 className="reviewer">
                        {/* Bayonle A, Houston TX */}
                    </h4>
                    </div>
                </div>
                </Flip>
            </div>
        </div>
        </Fade>
    )
}
export default Reviews;