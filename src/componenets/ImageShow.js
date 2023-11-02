
import './ImageShow.css'


function ImageShow({ image }) {
  return <div>
    <div  className="img-div">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>

  </div>;

}

export default ImageShow;