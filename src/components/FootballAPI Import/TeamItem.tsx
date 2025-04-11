import React from "react";
import { FootballTeam } from "./types";

interface TeamItemProps {
  team: FootballTeam;
  onSelect: (team: FootballTeam) => void;
  isSelected: boolean;
}

const TeamItem: React.FC<TeamItemProps> = ({ team, onSelect, isSelected }) => {
  const teamItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0.8rem 1rem",
    marginBottom: "0.8rem",
    backgroundColor: isSelected ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    borderLeft: isSelected ? "4px solid #fdbb2d" : "4px solid transparent",
    boxShadow: isSelected ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
    transform: isSelected ? "translateX(5px)" : "none",
  };

  const teamRankStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontWeight: "bold",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
    fontSize: "1rem",
  };

  const teamIconStyle = {
    width: "30px",
    height: "30px",
    objectFit: "contain" as const,
    marginRight: "1rem",
  };

  const teamInfoStyle = {
    flex: 1,
  };

  const teamNameStyle = {
    fontWeight: 500,
    marginBottom: "0.2rem",
    color: "white",
  };

  const teamStatsStyle = {
    fontSize: "0.8rem",
    color: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <div
      style={teamItemStyle}
      onClick={() => {
        console.log(team.teamName);
        onSelect(team);
      }}
    >
      <div style={teamRankStyle}>
        {team.points}
      </div>
      {team.teamIconUrl && (
        <img 
          src={team.teamIconUrl} 
          alt={`${team.teamName} logo`}
          style={teamIconStyle}
        />
      )}
      <div style={teamInfoStyle}>
        <div style={teamNameStyle}>{team.teamName}</div>
        <div style={teamStatsStyle}>
          {team.won}W {team.draw}D {team.lost}L
        </div>
      </div>
    </div>
  );
};

export default TeamItem;