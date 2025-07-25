import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import HomepageHero from "pages/homepage";
import JourneyEducationExperience from "pages/journey";
import ProjectPortfolio from "pages/project";
import Skills from "pages/skills";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Update path jika ingin konsisten dengan folder baru */}
        <Route path="/" element={<HomepageHero />} />
        <Route path="/homepage" element={<HomepageHero />} />
        <Route path="/journey" element={<JourneyEducationExperience />} />
        <Route path="/project" element={<ProjectPortfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;