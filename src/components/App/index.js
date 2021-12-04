import AnimalList from "../AnimalList/AnimalList";
import Header from "../Header/Header";
import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About/About";

const App = () => {
  return (
    <Router>
    <div className="container">
    <Header />
       <Routes>
         <Route path="/" element={<AnimalList />} />
         <Route path="/about" element={<About/>} />
       </Routes>
    </div>
    </Router>
    )
};

export default App;
