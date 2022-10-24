import React from "react";
import { GamesSection } from "../components/Home/GamesSection/GamesSection";
import { HomeImage } from "../components/Home/PhotoScreen/PhotoScreen";

export const Home = () => {
  return (
    <div>
      <HomeImage />
      <GamesSection />
    </div>
  );
};
