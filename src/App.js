import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import TechStacks from "./components/Technologies";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Portfolio />
      <TechStacks />
      

      <SocialLinks/>
    </div>
  );
}

export default App;
