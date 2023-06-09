import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainRoute } from "./Components/Routes/MainRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
    </div>
  );
}

export default App;
