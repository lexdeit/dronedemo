import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Accesories from "./Components/Accesories/Accesories";
import Gallery from "./Components/Gallery/Gallery";
import Drone3d from "./Components/3Drone/Drone3d";
import Post from "./Components/Post/Post";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Letters from "./Components/Lettersvideo/Letters";

const App = () => {
  return (
    <>
      <Menu />
      <Home />
      <Services />
      <Letters texto={"Accesories"} size={"10em"} />
      <Accesories />
      <Letters texto={"Cinematic"} size={"15em"} />
      <Gallery />
      <Drone3d />
      <Post />
      <Letters texto={"DroneX"} size={"20em"} />
      <Footer />
    </>
  )
}

export default App;