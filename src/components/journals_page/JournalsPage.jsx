import './JournalsPage.css';
import { Link } from 'react-router';
import { journals } from './data/journals';

export function JournalsPage() {
  return (
    <div className="specific-page-container">
      <h1>My Journals</h1>

      <div className="journals-list">
        {journals.map(journal => (
          <Link key={journal.id} to={journal.id}>
            <div className="journal-entry-preview">
              {journal.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}