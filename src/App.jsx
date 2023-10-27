import { useState } from "react";
import Logo from "./components/Header/Logo/Logo";
import Search from "./components/Header/Search/Search";

function App() {
  return (
    <div className="max-w-7xl mx-auto font-sans text-white">
      <Logo />
      <Search />
    </div>
  );
}

export default App;
