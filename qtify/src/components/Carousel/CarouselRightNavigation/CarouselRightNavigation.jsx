// import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

// export default function CarouselRightNavigation() {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", function () {
//       setIsEnd(swiper.isEnd);
//     });
//   }, []);

//   swiper.on("slideChange", function () {
//     setIsEnd(swiper.isEnd);
//   });

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", handleSlideChange);

    return () => swiper.off("slideChange", handleSlideChange); // cleanup
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      <RightArrow
        onClick={() => swiper.slideNext()}
        style={{
          opacity: isEnd ? 0.5 : 1,
          pointerEvents: isEnd ? "none" : "auto",
          cursor: isEnd ? "default" : "pointer",
        }}
      />
    </div>
  );
}
