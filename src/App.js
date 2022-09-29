import { useState } from "react";
import "./App.css";
import TitleList from "./components/TitileList";
import {
  ThemeProvider,
} from "./contexts/theme-context";

const App = () => {
  const [resourceName, setResourceName] = useState("posts");
  return (
    <>
      <ThemeProvider>
        <button
          onClick={() => {
            setResourceName("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceName("todos");
          }}
        >
          Todos
        </button>
        <TitleList resourceName={resourceName} />
      </ThemeProvider>
    </>
  );
};

export default App;
