import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { Games } from "../pages/Games";
import { Portfolio } from "../pages/Portfolio";
import { G3072 } from "../pages/G3072";
import { MomoryGame } from "../pages/MomoryGame";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/games" element={<Main />} />
      <Route path="/board" element={<Games />} />
      <Route path="/3072" element={<G3072 />} />
      <Route path="/memory" element={<MomoryGame />} />
    </Routes>
  );
};
