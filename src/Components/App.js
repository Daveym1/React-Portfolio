import Header from "./Header";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import Project from "./Project";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
