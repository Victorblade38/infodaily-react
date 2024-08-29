import React from "react";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

const Hero = () => {
  const heroNewsData = [
    {
      provider: "CNN",
      heading:
        "RIL AGM today: Timing, when and where to watch Reliance livestream, agenda and more details",
      img: img1,
    },
    {
      provider: "BBC",
      heading:
        "Global Market Update Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa quaerat quasi aliquam tenetur explicabo a fugit dicta velit, perspiciatis laudantium. Adipisci rem neque inventore placeat perferendis dicta. Quibusdam, nobis!",
      img: img2,
    },
    {
      provider: "New York Times",
      heading:
        "Health and Wellness Tips Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa quaerat quasi aliquam tenetur explicabo a fugit dicta velit, perspiciatis laudantium. Adipisci rem neque inventore placeat perferendis dicta. Quibusdam, nobis!",
      img: img3,
    },
    {
      provider: "CNN",
      heading:
        "Environmental Conservation Efforts Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa quaerat quasi aliquam tenetur explicabo a fugit dicta velit, perspiciatis laudantium. Adipisci rem neque inventore placeat perferendis dicta. Quibusdam, nobis!",
      img: img1,
    },
    {
      provider: "New York Times",
      heading:
        "Sports Highlights Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa quaerat quasi aliquam tenetur explicabo a fugit dicta velit, perspiciatis laudantium. Adipisci rem neque inventore placeat perferendis dicta. Quibusdam, nobis!",
      img: img2,
    },
  ];

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide h-75 w-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {heroNewsData.map((item, index) => {
          return (
            <div
              className={`carousel-item  ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000"
              key={index}
            >
              <img src={item.img} className="d-block h-75 w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-start text-break fs-1 fw-semibold">
                  {item.heading}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  width: "90%",
  height: "600px",
  objectFit: "cover",
};

const textShadow = {
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
};
