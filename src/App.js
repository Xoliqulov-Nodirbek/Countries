import {useState } from "react";
import Countryes from "./components/countryes/countryes";
import Header from "./components/header/header";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <Header setInput={setInput} />
      <Countryes inputText={input} />
    </>
  );
}

export default App;
