import { Parallax } from "react-parallax";
import pexels from "../images/pexels-pixabay-73873.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={pexels} strength={800}>
    <div className="content">
      <span className="text-img">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
