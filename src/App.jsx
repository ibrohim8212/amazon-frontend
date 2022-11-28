import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop } from "./utils/index";
import { Overlay } from './utils/index'
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/footer"
import { useEffect, useState } from "react";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  useEffect(() => {
    if(isSidebarOpen === true) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])
 
  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes/>
      <BackToTop/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Footer/>
      { isSidebarOpen === true ? <Overlay setIsSidebarOpen={setIsSidebarOpen}/> : null}
      
    </>
  );
}

export default App;
