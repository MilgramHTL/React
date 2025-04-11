import React, { useState, useEffect } from "react";
import { FootballTeam } from "./types";
import TeamItem from "./TeamItem";

export default function FootballContainer() {
  const [footballData, setFootballData] = useState<FootballTeam[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<FootballTeam | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadFootballData();
  }, []);

  const loadFootballData = () => {
    setLoading(true);
    fetch("https://api.openligadb.de/getbltable/bl1/2024")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setFootballData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const containerStyle = {
    display: "flex",
    gap: "2rem",
    padding: "2rem",
    background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    color: "white",
    minHeight: "80vh",
  };

  const tableContainerStyle = {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxHeight: "70vh",
    overflowY: "auto" as const,
  };

  const tableTitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center" as const,
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const detailsContainerStyle = {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  };

  const detailsTitleStyle = {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center" as const,
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const teamDetailsStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    width: "100%",
    padding: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const teamLogoStyle = {
    width: "120px",
    height: "120px",
    objectFit: "contain" as const,
    marginBottom: "1rem",
    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
  };

  const teamNameStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "center" as const,
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const teamShortNameStyle = {
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "1.5rem",
  };

  const noTeamSelectedStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1.2rem",
    textAlign: "center" as const,
  };

  return (
    <div style={containerStyle}>
      <div style={tableContainerStyle}>
        <h2 style={tableTitleStyle}>Bundesliga Teams</h2>
        {loading ? (
          <div>Loading teams...</div>
        ) : (
          footballData.map((team: FootballTeam) => (
            <TeamItem 
              key={team.teamInfoId}
              team={team} 
              onSelect={setSelectedTeam}
              isSelected={selectedTeam?.teamInfoId === team.teamInfoId}
            />
          ))
        )}
      </div>
      
      <div style={detailsContainerStyle}>
        <h1 style={detailsTitleStyle}>Team Details</h1>
        {selectedTeam ? (
          <div style={teamDetailsStyle}>
            {selectedTeam.teamIconUrl && (
              <img 
                src={selectedTeam.teamIconUrl} 
                alt={`${selectedTeam.teamName} logo`}
                style={teamLogoStyle}
              />
            )}
            <h2 style={teamNameStyle}>{selectedTeam.teamName}</h2>
            <div style={teamShortNameStyle}>{selectedTeam.shortName}</div>
            
            <div style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              marginTop: "1rem",
            }}>
              {[
                { label: "Points", value: selectedTeam.points },
                { label: "Position", value: footballData.findIndex(t => t.teamInfoId === selectedTeam.teamInfoId) + 1 },
                { label: "Matches", value: selectedTeam.matches },
                { label: "Won", value: selectedTeam.won },
                { label: "Draw", value: selectedTeam.draw },
                { label: "Lost", value: selectedTeam.lost },
                { label: "Goals", value: selectedTeam.goals },
                { label: "Goals Against", value: selectedTeam.opponentGoals },
                { label: "Goal Difference", value: selectedTeam.goalDiff }
              ].map((stat, index) => (
                <div key={index} style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "0.8rem",
                  borderRadius: "6px",
                  textAlign: "center",
                  transition: "transform 0.2s, background-color 0.2s",
                }}>
                  <div style={{
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "0.3rem",
                  }}>{stat.label}</div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={noTeamSelectedStyle}>
            <p>Select a team from the list to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
