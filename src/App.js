import "./App.css";
import Home from "./pages/Home/Home";
import AppState from "./Context/AppState";

function App() {
  return (
    <div className="App">
      <AppState>
        <Home />
      </AppState>
    </div>
  );
}

export default App;
