import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Calculator from './components/Calculator'
import Results from './components/Results'

function App() {
  return (
    <div className="bille">
      <Header />
      <div className="content">
        <Calculator />
        <Results />
      </div>
    </div>
  );
}

export default App;
