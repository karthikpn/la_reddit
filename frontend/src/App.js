import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Profile from "./Screen/Profile";
import Register from "./Screen/Register";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F8F9F9",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
