import React from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Добро пожаловать!
        </h1>
      </main>
    </div>
  );
}

export default App;
