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
                    “Moneymie has a friendly and easy to learn interface it also fixes issues that comes with international fund transfer.”
                    
                    <h4 className="reviewer">
                        
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
                    “A friend of mine olakunle Victor introduced me to this app and am enjoying it. Easy to use with good user interface.”
                    
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