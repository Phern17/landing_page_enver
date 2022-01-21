import React, { Fragment, useEffect, useState } from "react";
import ContactUs from "./components/contactUs/ContactUs";
import MainHeader from "./components/header/MainHeader";
import PopUpModal from "./components/header/PopUpModal";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import WhyUs from "./components/why-us/WhyUs";
import useWindowSize from "./hooks/useWindowSize";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(`From app: ${width}`);

  const expandMenuHandler = () => {
    if (typeof width === "number" && width < 640) {
      setIsExpanded((prevState) => {
        return (prevState = !prevState);
      });
    }
  };

  useEffect(() => {
    if (width && width >= 640) {
      setIsExpanded(false);
    }
  }, [width]);

  let mainContent = (
    <Fragment>
      <Intro />
      <WhyUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </Fragment>
  );

  return (
    <Fragment>
      { !isExpanded && <MainHeader onExpand={expandMenuHandler} /> }
      <div className="mx-6 mt-24 sm:mx-32">
        {!isExpanded && mainContent}
        {isExpanded && width && width < 640 && (
          <PopUpModal onExpand={expandMenuHandler} />
        )}
      </div>
    </Fragment>
  );
}

export default App;
