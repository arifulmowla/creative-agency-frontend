import React from 'react';
import './review.scss'

const Review = ({review}) => {
    return (
        <div className="review">
            <div className="row">
                <div className="col-3">
                    <div className="avatar d-flex align-items-center justify-content-center rounded-circle">
                        <img className="w-100 rounded-circle" src={review.photoUrl} alt="avatar"/>
                    </div>

                </div>
                <div className="col-9">
                    <h5 className="review-name">{review.name}</h5>
                    <h6>{review.company}</h6>
                </div>
            </div>
            <p>
                {review.description}
            </p>
        </div>
    );
};

export default Review;