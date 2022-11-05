import React from "react";
import { GamesSection } from "../components/Home/GamesSection/GamesSection";
import { HomeImage } from "../components/Home/PhotoScreen/PhotoScreen";
import { PlayersSection } from "../components/Home/PlayersSection/PlayersSection";
import { TeamsSection } from "../components/Home/TeamsSection/TeamsSection";

export const Home = () => {
  return (
    <div>
      <HomeImage />
      <GamesSection />
      <PlayersSection />
      <TeamsSection />
    </div>
  );
};
