import Header from "./Header";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Cv from "./Cv";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
