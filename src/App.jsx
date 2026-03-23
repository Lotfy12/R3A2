import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./common/Loading";
// const Home = lazy(
//   () =>
//     new Promise((resolve) => {
//       setTimeout(() => resolve(import("./pages/Home")), 10000);
//     })
// );
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact_Us = lazy(() => import("./pages/Contact_US"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Team = lazy(() => import("./pages/Team"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact_Us />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
