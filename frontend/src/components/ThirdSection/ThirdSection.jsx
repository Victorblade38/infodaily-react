import React from "react";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";

const ThirdSection = () => {
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
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {heroNewsData.map((item, index) => {
          const heading = item.heading;
          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000"
              key={index}
            >
              <img
                className="d-block w-100"
                src={item.img}
                alt="..."
                style={{
                  height: "70vh", // Set the desired height of the images
                  objectFit: "cover", // Ensure images cover the area without distortion
                  objectPosition: "center", // Center the images within the container
                }}
              />
              <div
                className="carousel-caption d-md-block"
                style={{
                  textAlign: "start",
                }}
              >
                <h4
                  className="text-start text-break"
                  style={{ fontFamily: "Times New Roman, Times, serif" }}
                >
                  Cnn
                </h4>
                <h5 style={{ fontFamily: "Times New Roman, Times, serif" }}>
                  {truncateText(heading, 30)}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdSection;
