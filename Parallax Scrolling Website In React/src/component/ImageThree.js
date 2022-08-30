import { Parallax } from "react-parallax";
import aldebaran from "../images/aldebaran-s-qtRF_RxCAo0-unsplash.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={aldebaran} strength={800}>
    <div className="content">
      <span className="text-img">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
