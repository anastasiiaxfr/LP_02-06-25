"use client";
import ReactStars from "react-stars";

export default function RatingStars({ rating }) {
  const ratingChanged = (newRating) => {
    //console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"#fff"}
      edit={false}
      value={rating || 5}
    />
  );
}
