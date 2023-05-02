import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Investment from "./Pages/Investment";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="investment" element={<Investment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
