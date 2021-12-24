import React from "react";
import Home from "../../pages/Home";
import Header from '../Header';
import About from "../../pages/About";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App: React.FC = () => {
    return(
            <Router>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
    )
};

export default App;
