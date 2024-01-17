import React from "react";
import Slider from "./Slider";

import classes from "./SiteTestimonialSlider.module.css";

const SiteTestimonialSlider = () => {
  const data = [
    {
      header: "New Favourite Boots",
      author: "Derek",
      review:
        "I recently purchased a pair of boots from PBB and they're absolutely amazing! So comfy and suprisingly durable. All with no animals harmed. What else could you ask for?",
    },
    {
      header: "Spreading the message in my new shoes",
      author: "Lauren",
      review: "I wear these trainers all the time especially when out doing my activism. The quality is well worth the price and the service was unfaultable. I love PBB!",
    },
    {
      header: "Spot on",
      author: "Oscar",
      review: "Delivery was fast, cost was just right, shoes were excelent quality, and it's all for a good cause. There's nothing more I could ask from a company!",
    },
  ];

  return (
    <div className={classes.main}>
      <Slider siteTestimonial data={data} pagination autoplay={true} slidesPerView={1} />
    </div>
  )
};

export default SiteTestimonialSlider;
