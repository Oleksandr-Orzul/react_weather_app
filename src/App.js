import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p className="aboutDeveloper">
          This project was coded by{" "}
          <a href="https://github.com/Oleksandr-Orzul">Oleksandr Orzul</a> and
          is <a href="">open-sourcedon GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default App;
