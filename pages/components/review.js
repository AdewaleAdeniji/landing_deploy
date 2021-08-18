import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Reviews = (props) => {
    return (
        <Fade bottom>
        <div className="reviewsection">
            <Fade right>
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
                            <img src="/images/stars.svg"/>
                        </div>
                        <div className="review-app">
                            <img src="/images/playstoreicon.svg"/>
                            Playstore Review
                        </div>

                    </div>
                    <div className="reviewtext">
                    “This is the easiest Transaction platform I have encountered in recent times. You have created the best tool for Nigerian immigrants. So proud of you both. May the LORD bless more of your ventures in Jesus Name.”
                    
                    <h4 className="reviewer">
                        Bayonle A, Houston TX
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
                    “The process is unbelievably seamless. And no charges!! #Heaven. Girl the money is in my GTBank already. No be juju be that.”
                    
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