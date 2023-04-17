import { useEffect, useState } from 'react';
import { lazy } from 'react';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Accesories from "./Components/Accesories/Accesories";
import Gallery from "./Components/Gallery/Gallery";
const Drone3d = lazy(() => import('./Components/3Drone/Drone3d'));
import Post from "./Components/Post/Post";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Letters from "./Components/Lettersvideo/Letters";




const App = () => {

  const [isScreenBig, setIsScreenBig] = useState(false);


  const handleResize = () => {
    setIsScreenBig(window.innerWidth >= 1200);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <Menu />
      <Home />
      <Services />
      <Letters texto={"Accesories"} size={"10em"} isScreenBig={isScreenBig} />
      <Accesories />
      <Letters texto={"Cinematic"} size={"15em"} isScreenBig={isScreenBig} />
      <Gallery />
      <Drone3d isScreenBig={isScreenBig} />
      <Post />
      <Letters texto={"DroneX"} size={"20em"} isScreenBig={isScreenBig} />
      <Footer />
    </>
  )
}

export default App;