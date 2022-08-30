import './App.css';
import ImageOne from "./component/ImageOne"
import ImageTwo from "./component/ImageTwo"
import ImageThree from "./component/ImageThree"
import TextBox from "./component/TextBox"

function App() {
  return (
    <div className="App">
      <ImageOne/>
      <TextBox/>
      <ImageTwo/>
      <TextBox/>
      <ImageThree/>
    </div>
  );
}

export default App;
