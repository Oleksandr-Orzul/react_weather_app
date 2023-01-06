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
          is{" "}
          <a href="https://github.com/Oleksandr-Orzul/react_weather_app">
            open-sourcedon GitHub
          </a>
          and
          <a href="https://github.com/Oleksandr-Orzul/react_weather_app">
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
