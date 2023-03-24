import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import TechStacks from "./components/Technologies";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <TechStacks/>
    </div>
  );
}

export default App;
