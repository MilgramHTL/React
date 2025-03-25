import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import Exercise02 from './components/pages/Exercise02'
import PeopleContainer from "./components/PeopleContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PeopleContainer />
      </div>
    </>
  );
}

export default App;
