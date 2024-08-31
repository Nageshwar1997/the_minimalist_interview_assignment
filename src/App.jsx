import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import About from "./components/About";

function App() {
  return (
    <div className="w-full h-full min-h-screen max-h-screen bg-red-200">
      <Header />
      <TopBanner />
      <About />
    </div>
  );
}

export default App;
