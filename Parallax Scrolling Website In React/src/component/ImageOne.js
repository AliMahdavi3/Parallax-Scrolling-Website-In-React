import { Parallax } from "react-parallax";
import Nasa from "../images/nasa-Q1p7bh3SHj8-unsplash.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Nasa} strength={800}>
    <div className="content">
      <span className="text-img">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
