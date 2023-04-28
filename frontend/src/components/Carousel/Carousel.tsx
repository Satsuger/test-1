import { useState } from "react";
import "./styles.scss";
import { ImageDto } from "../../services/dto/images.dto";

const Carousel = ({ images }: { images: ImageDto[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map(({ url, thumbnailUrl, title }, index) => (
            <div className="carousel-item" key={title}>
              <img src={thumbnailUrl || url} alt={title} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="carousel-arrow prev"
        onClick={() =>
          setCurrent(current - 1 < 0 ? images.length - 1 : current - 1)
        }
      />
      <div
        className="carousel-arrow next"
        onClick={() =>
          setCurrent(current + 1 > images.length - 1 ? 0 : current + 1)
        }
      />

      <div className="carousel-dots">
        {images.map(({ id }, index) => (
          <div
            key={id}
            className={
              current === index ? "carousel-dot active" : "carousel-dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
