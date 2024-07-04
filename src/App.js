import './App.css';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

function App() {
  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, {
      width: elementRef.current.offsetWidth,
      height: elementRef.current.offsetHeight,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // htmlToImage.toJpeg(document.getElementById('convert-this'), { quality: 0.95 })
  // .then(function (dataUrl) {
  //   var link = document.createElement('a');
  //   link.download = 'my-image-name.jpeg';
  //   link.href = dataUrl;
  //   link.click();
  // });

  return (
    <div className="wrapper" ref={elementRef}>
      <div className="blur-bg"></div>
      <div className="image-bg" onClick={htmlToImageConvert}></div>
    </div>
  );
}

export default App;
