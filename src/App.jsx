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
      <Accesories />
      <Gallery />
      <Drone3d />
      <Post />
      <Letters/>
      <Footer />
    </>
  )
}

export default App;