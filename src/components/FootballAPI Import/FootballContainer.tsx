import React, { useState, useEffect } from "react";
import { FootballTeam } from "./types";
import TeamItem from "./TeamItem";

export default function FootballContainer() {
  const [footballData, setFootballData] = useState<FootballTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<FootballTeam | null>(null);

  useEffect(() => {
    loadFootballData();
  }, []);

  const loadFootballData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2024")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setFootballData(json);
      });
  };

  return (
    <div className="flex">
      <div id="table">
        {footballData.map((team: FootballTeam) => (
          <TeamItem 
            key={team.teamInfoId}
            team={team} 
            onSelect={setSelectedTeam} 
          />
        ))}
      </div>
      <div>
        <h1>Aktuelles Team</h1>
        {selectedTeam && <div>{selectedTeam.shortName}</div>}
      </div>
    </div>
  );
}
