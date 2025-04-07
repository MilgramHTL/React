import React from "react";
import { FootballTeam } from "./types";

interface TeamItemProps {
  team: FootballTeam;
  onSelect: (team: FootballTeam) => void;
}

const TeamItem: React.FC<TeamItemProps> = ({ team, onSelect }) => {
  return (
    <div
      className="team-item hover:cursor-pointer p-4 border"
      key={team.teamInfoId}
      onClick={() => {
        console.log(team.teamName);
        onSelect(team);
      }}
    >
      {team.teamName}
    </div>
  );
};

export default TeamItem;