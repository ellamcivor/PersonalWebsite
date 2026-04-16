import './ProjectsPage.css';
import { useState } from "react";
import LeftBackground from './images/pink-plaid-background.jpg';
import RightBackground from './images/polka-dot-background.jpg';
import InfoWindow from './images/info-window.png';
import OpenFolderIcon from './images/open-folder-icon.png';
import projects_data from './assets/projects.json';
import { Folder } from './Folder';

export function ProjectsPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedTab, setSelectedTab] = useState("about-tab");

  const projects = [...projects_data.projects].sort(
    (a, b) => Number(b.date) - Number(a.date)
  );

  // const projects = projects_data.projects;

  const selectedProject = projects.find(
    (project) => project.id === selectedFolder
  );

  return (
    <div className="specific-page-container projects-page">

      <div className='left-page-container'>
        <img src={LeftBackground} className='left-background-paper glue-on' />
        <div className='info-window-container glue-on'>
          <img src={InfoWindow} className='info-window' />
          <div className='window-title-container glue-on'>
            <img src={OpenFolderIcon} className='open-folder-icon' />
            {selectedProject && selectedProject.name}
          </div>
          <div className='window-tabs-container glue-on'>
            <div className={`tab-button ${selectedTab === "about-tab" ? "selected-tab" : ""}`} onClick={() => setSelectedTab("about-tab")}>
              About
            </div>
            <div className={`tab-button ${selectedTab === "tech-tab" ? "selected-tab" : ""}`} onClick={() => setSelectedTab("tech-tab")}>
              Tech
            </div>
            <div className={`tab-button ${selectedTab === "view-tab" ? "selected-tab" : ""}`} onClick={() => setSelectedTab("view-tab")}>
              View
            </div>
            <div className='tab-button'>
              {selectedProject && (
                <a
                  className='code-link'
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              )}
            </div>
          </div>
          <div
            className={`window-content-container glue-on 
            ${selectedTab === 'about-tab' && 'about-container'} 
            ${selectedTab === 'tech-tab' && 'tech-container'}
            ${selectedTab === 'view-tab' && 'view-container'}`}
          >
            {selectedTab === 'about-tab' && selectedProject && (
              <div className="project-description">
                {selectedProject.description.header && (
                  <>
                    <span className='project-header'>{selectedProject.description.header}</span>
                    <br />
                  </>
                )}
                {selectedProject.date && (
                  <>
                    {selectedProject.date}
                    <br /><br />
                  </>
                )}
                {selectedProject.description.paragraph && (
                  <>
                    {selectedProject.description.paragraph}
                    <br /><br />
                  </>
                )}
                {selectedProject.personalThoughts && (
                  <>
                    <span className='project-header'>Personal Thoughts</span>
                    <br /><br />
                    {selectedProject.personalThoughts}
                  </>
                )}
              </div>
            )}
            {selectedTab === 'tech-tab' && selectedProject && (
              (selectedProject.technologies && (
                <ul className="tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index} className="tech-list-item">
                      <span className='tech-list-item-header'>{tech.name}</span>
                      <br />
                      {`(${tech.use})`}
                    </li>
                  ))}
                </ul>))
            )}
            {selectedTab === 'view-tab' && selectedProject && (
              <img src={selectedProject.imageUrl} className='project-image' />
            )}
          </div>
        </div>
      </div>

      <div className='right-page-container'>
        <img src={RightBackground} className='right-background-paper glue-on' />
        <div className='folder-grid glue-on'>
          {projects.map((project, index) => (
            <Folder
              key={index}
              name={project.name}
              color={project.fileColor}
              selected={selectedFolder === project.id}
              onClick={() => {
                setSelectedFolder(project.id);
                setSelectedTab('about-tab');
              }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}