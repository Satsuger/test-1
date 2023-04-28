import "./styles.scss";
import { ImageDto } from "../../services/dto/images.dto"
import Icon from "../Icon";

const ImageGallery = ({images}: {images: ImageDto[]}) => (
  <div className="gallery-wrapper">
    {images.map(({url, thumbnailUrl, title}) => (
      <div className="image-container">
        <div className="img-wrapper">
          <img src={thumbnailUrl || url} alt={title} />
        </div>

        <div className="edit">
          <Icon.Edit height='14px' />
        </div>
        
        <h3 className="image-title">
          {title}
        </h3>
      </div>
    ))}
  </div>
)

export default ImageGallery
