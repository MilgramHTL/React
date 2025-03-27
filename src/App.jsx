import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExerciseComponents from "./components/pages/ExerciseComponents";
import ExerciseDemoCard from "./components/pages/ExerciseDemoCard";

function App() {
  return (
    <>
      <div>
        <ExerciseDemoCard />
      </div>
    </>
  );
}

export default App;
