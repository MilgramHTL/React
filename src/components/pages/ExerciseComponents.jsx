import React from "react";
import Card from "../WWWSchoolCard";
import List from "../List";
import Button from "../Button";
import { Link } from "react-router";
export default function ExerciseComponents() {
  const person = {
    name: "John Doe",
    jobtitle: "Software Engineer",
    description: "I am a software engineer",
  };
  return (
    <div>
      <h1 className="bg-blue-500">Components</h1>
      <div className="flex"></div>
      <div>
        <List items={["Coffee", "Tea", "Beer"]} />
      </div>
      <div>
        <Button title="Clicked" enabled={true} />
      </div>
      <div>
        <Card
          name={"John Doe"}
          jobtitle={"Software Engineer"}
          description={"I am a software engineer"}
        />
      </div>
      <Link
        to="/exDemo"
        state={{ person: person, title: "Test" }}
        className="bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-red-300"
      >
        DemoCards
      </Link>
      ;
    </div>
  );
}
