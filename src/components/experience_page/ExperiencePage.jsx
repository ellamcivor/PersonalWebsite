import { useState } from 'react';
import "./ExperiencePage.css"
import { ExperiencePage1 } from './page1/ExperiencePage1';
import { ExperiencePage2 } from './page2/ExperiencePage2';

export function ExperiencePage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="specific-page-container">
      {currentPage === 1 && (
        <ExperiencePage1 goToPage2={() => setCurrentPage(2)} />
      )}

      {currentPage === 2 && (
        <ExperiencePage2 goToPage1={() => setCurrentPage(1)} />
      )}
    </div>
  );
}