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

function App() {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState(false);

  const expandMenuHandler = () => {
    if (typeof width === "number" && width < 640) {
      setIsExpanded((prevState) => {
        return (prevState = !prevState);
      });
    }
  };

  useEffect(()=> {
    if (width && width >= 640) {
      setIsExpanded(false)
    }
  }, [width])

  let mainContent = <Fragment>
    <MainHeader onExpand={expandMenuHandler}/>
      <Intro />
      <WhyUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
  </Fragment>

  return (
    <div className="mt-10 mx-6 lg:mx-32">
      { !isExpanded && mainContent }
      { isExpanded &&  width && width < 640 && <PopUpModal onExpand={expandMenuHandler}/> }
    </div>
  );
}

export default App;
