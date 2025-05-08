import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loader from "../Components/Loader";
import ProRecruitor from "../Pages/ProRecruitor";
import ScrollToTop from "../Shared/ScrollToTop";// Importing ScrollToTop

const Home = lazy(() => import("../Pages/Home"));
const Companies = lazy(() => import("../Pages/Companies"));
const Recruitement = lazy(() => import("../Pages/Recruitement"));
const JobsSeeker = lazy(() => import("../Pages/JobsSeeker"));
const Privacy = lazy(() => import("../Pages/Policy/Privacy"));
const Terms = lazy(() => import("../Pages/Policy/Terms"));
const Support = lazy(() => import("../Pages/Policy/Support"));
const TalentHub = lazy(() => import("../Pages/TalentHub"));
const ZepRecruit = lazy(() => import("../Pages/ZepRecruit"));

const Router = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zepTalentHub" element={<TalentHub />} />
          <Route path="/ZepRecruit" element={<ZepRecruit />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/recruitment" element={<Recruitement />} />
          <Route path="/jobseeker" element={<JobsSeeker />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/prorecruitor" element={<ProRecruitor />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default Router;
