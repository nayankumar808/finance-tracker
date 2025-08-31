import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
