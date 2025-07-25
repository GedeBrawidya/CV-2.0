import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import HomepageHeroLanding from "pages/homepage";
import ProfessionalJourneyEducationExperience from "pages/journey";
import ProjectPortfolioCaseStudiesShowcase from "pages/project";
import SkillsMatrixTechnicalEcosystem from "pages/skills";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Update path jika ingin konsisten dengan folder baru */}
        <Route path="/" element={<HomepageHeroLanding />} />
        <Route path="/homepage" element={<HomepageHeroLanding />} />
        <Route path="/journey" element={<ProfessionalJourneyEducationExperience />} />
        <Route path="/project" element={<ProjectPortfolioCaseStudiesShowcase />} />
        <Route path="/skills" element={<SkillsMatrixTechnicalEcosystem />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;