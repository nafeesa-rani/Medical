import { useState, useEffect, useRef } from 'react';

export default function ImageCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_Punjab.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo_of_UNICEF_%28cropped%29.svg/1280px-Logo_of_UNICEF_%28cropped%29.svg.png',
    'https://static.vecteezy.com/system/resources/thumbnails/013/085/098/small/health-care-logo-illustration-vector.jpg',
    'https://images.seeklogo.com/logo-png/44/1/punjab-health-care-commission-logo-png_seeklogo-448103.png'
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 0.5;
    let scrollPosition = 0;
    const maxScroll = carousel.scrollWidth / 2;

    const interval = setInterval(() => {
      if (!isHovered) {
        scrollPosition += scrollSpeed;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          carousel.style.transition = 'none';
          carousel.style.transform = `translateX(0px)`;
          setTimeout(() => {
            carousel.style.transition = 'transform 0.05s linear';
          }, 10);
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="carousel-container">
      <div
        ref={carouselRef}
        className="carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...Array(2)].map((_, setIndex) =>
          images.map((image, imgIndex) => (
            <img
              key={`${setIndex}-${imgIndex}`}
              src={image}
              alt={`carousel-${imgIndex}`}
              className="carousel-image"
            />
          ))
        )}
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          height: auto;
          background-color: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          display: flex;
          margin-top: 5rem;
          margin-bottom: 5rem;
          align-items: center;
          opacity: 0.8;
          box-shadow: 0 0.5px 0 #e0e0e0;
        }

        .carousel-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 80px;
          background: linear-gradient(to right, #f9f9f9, transparent);
          z-index: 10;
          pointer-events: none;
        }

        .carousel-container::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 80px;
          background: linear-gradient(to left, #f9f9f9, transparent);
          z-index: 10;
          pointer-events: none;
        }

        .carousel-wrapper {
          display: flex;
          height: 100%;
          gap: 6rem;
          padding: 2rem 1rem;
          transition: transform 0.05s linear;
        }

        .carousel-image {
          flex: 0 0 calc(25% - 8px);
          width: 0.05rem;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
          gap: 4rem;
          transition: transform 0.3s ease;
        }

        .carousel-image:hover {
          transform: scale(1.1);
          z-index: 10;
        }

        /* RESPONSIVE: Tablet (1024px and below) */
        @media (max-width: 1024px) {
          .carousel-container {
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          .carousel-wrapper {
            gap: 4rem;
            padding: 1.5rem 1rem;
          }

          .carousel-image {
            height: 130px;
          }

          .carousel-container::before,
          .carousel-container::after {
            width: 60px;
          }
        }

        /* RESPONSIVE: Tablet (768px and below) */
        @media (max-width: 768px) {
          .carousel-container {
            margin-top: 3rem;
            margin-bottom: 3rem;
            border-radius: 6px;
          }

          .carousel-wrapper {
            gap: 3rem;
            padding: 1.2rem 0.8rem;
          }

          .carousel-image {
            height: 110px;
          }

          .carousel-container::before,
          .carousel-container::after {
            width: 50px;
          }
        }

        /* RESPONSIVE: Mobile (480px and below) */
        @media (max-width: 480px) {
          .carousel-container {
            margin-top: 2rem;
            margin-bottom: 2rem;
            border-radius: 6px;
          }

          .carousel-wrapper {
            gap: 2.5rem;
            padding: 1rem 0.5rem;
          }

          .carousel-image {
            height: 90px;
          }

          .carousel-container::before,
          .carousel-container::after {
            width: 40px;
          }
        }

        /* RESPONSIVE: Extra Small (320px) */
        @media (max-width: 320px) {
          .carousel-container {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 4px;
          }

          .carousel-wrapper {
            gap: 2rem;
            padding: 0.8rem 0.3rem;
          }

          .carousel-image {
            height: 70px;
          }

          .carousel-container::before,
          .carousel-container::after {
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
}