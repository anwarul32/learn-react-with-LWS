import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
          {/* Components  */}
      {/* <Clock locale="bn-BD" /> */}
      <Clock locale="bn-BD" >Bangladeshi</Clock>
    </div>
  );
}

export default App;
