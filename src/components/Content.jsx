import './Content.css';
import { ContactInfo } from './contact_info/ContactInfo';
import { Page } from './Page';

export function Content () {
  return (
    <div className="content-container">
      <Page />
      <ContactInfo />
    </div>
  );
}