import './ExperiencePage2.css'
import PinkGinghamBackground from './images/pink-gingham-background.png'
import PinkBackground from './images/pink-background.png'
import ComputerWindow from './images/computer-window.png'
import GryphonLogo from './images/gryphon-logo.png'
import LinedPaperScrap from './images/lined-paper-scrap.png'
import GuestCheck from './images/guest-check.png'
import WatersEdge from './images/waters-edge.JPG'

export function ExperiencePage2({ goToPage1 }) {
  return (
    <div className='glue-on experience-page-container'>
      <button
        className='glue-on experience-page-back-btn'
        onClick={goToPage1}
      >
        Back
      </button>

      <div className='glue-on experience-left-page-container'>
        <img src={PinkGinghamBackground} className="glue-on e2-page-background" />
        <h1 className='glue-on e2-title-text' id="e2-uofg-title">Univeristy of Guelph</h1>
        <img src={ComputerWindow} className="glue-on" id="e2-computer-window" />
        <div className='glue-on e2-digital-text' id='e2-uofg-description-container'>
          <p>
            I began my studies at the University of Guelph as a Mathematical Science
            major, but after taking my first programming course, I realized my passion
            for Computer Science. This led me to switch into the program in my third
            year, while continuing to keep mathematics as an important area of application
            in my studies.
            <br /><br />
            Making this transition later in my degree was initially intimidating, and I
            experienced some imposter syndrome. What made the biggest difference was
            working on team-based projects and building connections with other students
            in the program, which helped me to grow both technically and professionally.
            <br /><br />
            Connecting with other women in STEM was an especially meaningful part of my
            experience. Being able to share perspectives with people who had similar experiences
            played an important role in building my confidence and sense of belonging in the
            field.
          </p>
        </div>
        <img src={GryphonLogo} className='glue-on' id='e2-gryphon-logo' />

        <p className='glue-on e2-digital-text' id='e2-linkedin-blurb'>Check out my LinkedIn to see a list of courses that I took during my
          time studying Computer Science in Guelph!
        </p>
      </div>

      <div className='glue-on experience-right-page-container'>
        <img src={PinkBackground} className='glue-on e2-page-background' />

        <h1 className='glue-on e2-title-text' id='e2-tutoring-title'>Tutoring</h1>
        <img src={LinedPaperScrap} className='glue-on' id='e2-lined-paper-scrap' />
        <div className='glue-on patrick-hand-text' id='e2-tutoring-description'>
          <p>
            I have been tutoring math since high school and currently work with
            Kaleidoscope Learning, where I support students with learning disabilities.
            This experience has taught me that there is no one-size-fits-all approach
            to learning, and has strengthened my ability to adapt explanations to fit
            each student's individual needs.
            <br /><br />
            I primarily tutor high school calculus, a subject that I have worked with
            extensively. Over time, teaching it regularly has made the concepts feel
            intuitive, and I enjoy helping students build both understanding and confidence
            in the material.
          </p>
        </div>

        <img src={GuestCheck} className='glue-on' id='e2-guest-check' />
        <div className='glue-on patrick-hand-text' id='e2-serving-description'>
          <p>
            I have worked as a host, server, and bartender in both Toronto and Muskoka for
            the past six years, an experience that has had a major impact on my personal and 
            professional growth. While I've always been drawn to analytical and problem-solving
            work, the restaurant industry helped me develop strong communcation and teamwork
            skills, making me a more well-rounded individual. 
            <br/><br/>
            Over time, it completely changed my confidence socially. I went from being very shy 
            to genuinely enjoying meeting new people and working in fast-paced, collabortive
            environments. It has also given me the opportunity to connect with people from a wide 
            range of backgrounds, further strengthening my ability to communicate and adapt.
          </p>
        </div>
        <img src={WatersEdge} className='glue-on' id='e2-waters-edge-img' />
      </div>
    </div>
  );
}