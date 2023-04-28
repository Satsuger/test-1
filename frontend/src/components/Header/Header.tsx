import "./styles.scss"

const Header = () => {
  return (
    <div className="header-container">
      <p className="select-view">Select view: 
        <span>Gallery</span>
        <span>Carousel</span>
      </p>

      <div className="btn add-image"></div>
    </div>
  ) 
}

export default Header;