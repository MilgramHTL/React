import React from "react";
import PeopleContainer from "../PeopleContainer";
import { useLocation } from "react-router";

export default function ExerciseDemoCard() {
  const location = useLocation();
  const person = location.state.person;
  console.log(person);
  console.log(location);
  return (
    <>
      <div></div>
      <PeopleContainer />;
    </>
  );
}
