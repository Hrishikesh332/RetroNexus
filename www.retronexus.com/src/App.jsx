import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Main from "./components/Main";
import Nav from "./components/Nav";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";

function App() {
  const webgiViewRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViewRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
        <Nav />
        <Main />
        <FeatureSection />
        <DisplaySection triggerPreview={handlePreview} />
        <Footer />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewRef} />
    </div>
  );
}

export default App;
