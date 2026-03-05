import './Page.css'
import { Routes, Route } from 'react-router';
import Notebook from '../assets/notebook.JPG';
import { TabBar } from './tab_bar/TabBar';
import { HomePage } from './home_page/HomePage';
import { ProjectsPage } from './projects_page/ProjectsPage';
import { ExperiencePage } from './experience_page/ExperiencePage';
import { HobbiesPage } from './hobbies_page/HobbiesPage';
import { CrochetPage } from './crochet_page/CrochetPage';
import { JournalsPage } from './journals_page/JournalsPage';
import { JournalEntry } from './journals_page/JournalEntry';

export function Page() {
  const leftTabs = [
    {
      title: "About Me",
      color: "maroon",
      link: "/"
    },
    {
      title: "Projects",
      color: "pink",
      link: "/projects"
    },
    {
      title: "Experience",
      color: "orange",
      link: "/experience"
    }
  ];

  const rightTabs = [
    {
      title: "Hobbies",
      color: "blue",
      link: "/hobbies"
    },
    {
      title: "Crochet",
      color: "green",
      link: "/crochet-projects"
    },
    {
      title: "Journals",
      color: "pink",
      link: "/journals"
    }
  ];

  return (
    <div className="page-container">
      {/*
        <Route path="experience" element={<ExperiencePage />}></Route>
        <Route path="hobbies" element={<HobbiesPage />}></Route> 
      */}
      <div className="notebook-container">
        <img src={Notebook} className="notebook-image" />
        <TabBar side="left" tabs={leftTabs} />
        <TabBar side="right" tabs={rightTabs} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="crochet-projects" element={<CrochetPage />} />
          <Route path="journals" element={<JournalsPage />} />
          <Route path="journals/:journalId" element={<JournalEntry />} />
        </Routes>
      </div>
    </div>
  );
}
