import "./App.css";
import { useState } from "react";
import { Contact, Footer, Home } from "./components";

function App() {
  return (
    <div>
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
