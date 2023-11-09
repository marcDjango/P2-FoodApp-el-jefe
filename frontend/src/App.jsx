import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
