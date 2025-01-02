import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingGallery = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    <div className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Our Facility</h2>
        <div className="gallery-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlidingGallery;