import './ExperiencePage2.css'

export function ExperiencePage2({ goToPage1 }) {
  return (
    <div>
      <button
        className='glue-on experience-page-back-btn'
        onClick={goToPage1}
      >
        Back
      </button>
    </div>
  );
}