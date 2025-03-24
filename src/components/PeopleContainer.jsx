import React from "react";
import Card from "./CardE03";
export default function PeopleContainer() {
  return (
    <div>
      <h1>People</h1>
      <div className="w-60">
        <Card
          name="John Doe"
          jobtitle="Software Engineer"
          picture="https://picsum.photos/200/300"
        />
        <Card
          name="Jane Doe"
          jobtitle="Software Engineer"
          picture="https://picsum.photos/200/300"
        />
        <Card
          name="John Smith"
          jobtitle="Software Engineer"
          picture="https://picsum.photos/200/300"
        />
      </div>
    </div>
  );
}
