import './ContactInfo.css'
import Title from './images/contact-me.png';
import GitHubIcon from './images/github-icon.png';
import LinkedInIcon from './images/linkedin-icon-2.png';
import GmailIcon from './images/gmail-icon.png';
import CVIcon from './images/cv-icon.png';

export function ContactInfo() {
  return (
    <>
      <div className="contact-info-container">
        <div className="title-container">
          <img src={Title} className="contact-me-title" />
        </div>
        <div className="icons-container">
          <a href="https://github.com/ellamcivor" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} className='contact-icon' />
          </a>
          <a href="https://www.linkedin.com/in/ella-mcivor-588272265/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} className='contact-icon' />
          </a>
          <img src={GmailIcon} className='contact-icon' />
          <img src={CVIcon} className='contact-icon' />
        </div>
      </div>
    </>
  );
}