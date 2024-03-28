import "./App.css";
import "./styles/utilities.css";
import "./styles/colors.css";
import Navigation from "./components/Navigation";

function App({ children }) {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
}

export default App;
