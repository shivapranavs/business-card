import React from "react";
import Info from "./Info";
import About from "./About";
import Footer from "./Footer";
import "./App.css";

function App() {
    return(
        <div className="page">
            <Info />
            <About />
            <Footer />
        </div>
    )
}

export default App
