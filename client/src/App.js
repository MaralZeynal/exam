import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Routing from "./routing";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
