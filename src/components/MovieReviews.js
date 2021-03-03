import React from "react";

const List = (review) => {
  return (
    <ul className="review">
      <li>Title: {review.display_title}</li>
      <li>Rating: {review.mpaa_rating}</li>
      <li>Headline: {review.headline}</li>
      <li>Summary: {review.summary_short}</li>
    </ul>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(List)}</div>
);
MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
