import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <p>Home page</p>
    </div>
  );
}

export default App;
