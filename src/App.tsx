import React, { Fragment, useEffect, useState } from "react";
import MainHeader from "./components/header/MainHeader";
import PopUpModal from "./components/header/PopUpModal";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import useWindowSize from "./hooks/useWindowSize";

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
      <Services />
  </Fragment>

  return (
    <div className="mt-10 mx-6 sm:mx-32">
      { !isExpanded && mainContent }
      { isExpanded &&  width && width < 640 && <PopUpModal /> }
    </div>
  );
}

export default App;
