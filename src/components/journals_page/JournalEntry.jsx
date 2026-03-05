import { useState } from 'react';
import { useParams } from "react-router";
import './JournalEntry.css'
import { journals } from "./data/journals";

export function JournalEntry() {
  const { journalId } = useParams();
  const journal = journals.find(j => j.id === journalId);

  const [spreadIndex, setSpreadIndex] = useState(0);

  if (!journal) {
    return <h1>Journal not found</h1>;
  }

  const leftPage = journal.pages[spreadIndex * 2];
  const rightPage = journal.pages[spreadIndex * 2 + 1];

  const maxSpread = Math.ceil(journal.pages.length / 2) - 1;

  return (
    <div className="specific-page-container journal-spread">

      <div className='left-page-container journal-page'>
        {leftPage && <img className="journal-page-image" src={leftPage.image} alt="" />}
      </div>

      <div className='right-page-container journal-page'>
        {rightPage && <img className="journal-page-image" src={rightPage.image} alt="" />}
      </div>

      <div className="spread-controls glue-on">

        {spreadIndex > 0 && (
          <button
            className='page-change-btn'
            onClick={() => setSpreadIndex(i => i - 1)}
            disabled={spreadIndex === 0}
          >
            Previous
          </button>
        )}

        {spreadIndex < maxSpread && (
          <button
            className='page-change-btn'
            onClick={() => setSpreadIndex(i => i + 1)}
            disabled={spreadIndex === maxSpread}
          >
            Next
          </button>
        )}

      </div>

    </div>
  );
}