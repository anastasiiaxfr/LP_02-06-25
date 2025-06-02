"use client";

import dynamic from "next/dynamic";

// Dynamically import your Rating component with SSR disabled
const Rating = dynamic(() => import("./rating"), { ssr: false });

export default function RatingClient({ rating }) {
  return <Rating rating={rating} />;
}
