import { React } from "react";

import "swiper/css";
import "swiper/css/navigation";

import SliderWithControls from "./SliderWithControls";

import hero1 from "../assets/images/hero-shoes-1.jpg";

const TestimonialCardSlider = (props) => {
  const dummyData = [
    {
      key: 0,
      image: hero1,
      name: "Derek de Goey",
      review: "Lorem ipsum dolor sit amet.",
      rating: 4,
      productName: "Blue Shoes",
    },
    {
      key: 1,

      image: hero1,
      name: "Lauren Cooper",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
      productName: "Blue Shoes",
    },
    {
      key: 2,

      image: hero1,
      name: "Oscar Coen",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3.5,
      productName: "Blue Shoes",
    },
    {
      key: 3,

      image: hero1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4.5,
      productName: "Blue Shoes",
    },
    {
      key: 4,

      image: hero1,
      name: "Jane Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 1,
      productName: "Blue Shoes",
    },
    {
      key: 5,
      image: hero1,
      name: "Warren Landert",
      review:
        "Lorem ipsum dolor sit amet. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 0.5,
      productName: "Blue Shoes",
    },
  ];

  return (
    <>
      <SliderWithControls data={dummyData} testimonialCard></SliderWithControls>
    </>
  );
};

export default TestimonialCardSlider;
