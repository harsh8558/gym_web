import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const SlidingGallery = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .slick-dots li button:before {
        color: #fff !important;
        font-size: 8px !important;
        opacity: 0.5;
      }
      .slick-dots li.slick-active button:before {
        color: #fff !important;
        opacity: 1;
      }
      .gallery-slider {
        width: 100%;
        margin: 0 auto;

      }
      .gallery-slider .slick-list {
        margin: 0;
      }
      .gallery-slider .slick-slide {
        padding: 0 10px;
      }
      @media (max-width: 768px) {
        .gallery-slider .slick-slide {
          padding: 0 5px;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const images = [
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/llmme9wtyv6hkyomavbm",
      title: "Modern Gym Equipment"
    },
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/kurkd6oz2nga9kqus3jw",
      title: "Weight Training Area"
    },
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/ltpjbfz565hqiryo01ug",
      title: "Cardio Section"
    },
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/truvep7qwdqeoejdzays",
      title: "Personal Training"
    },
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/fbxwigidbncysewfuav7",
      title: "Fitness Classes"
    },
    {
      url: "https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/fbxwigidbncysewfuav7",
      title: "Fitness Classes"
    }
  ];

  return (
    <div className="w-full py-10 bg-gray-700/30 backdrop-blur-lg">
      <div className="w-[100%] max-w-7xl mx-auto px-4">
        <div className="gallery-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div className="mx-0">
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlidingGallery;