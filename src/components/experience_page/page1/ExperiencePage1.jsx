import './ExperiencePage1.css'
import GraphPaper from './images/graph-paper.png'
import LinedPaper from './images/lined-paper.png'
import LinedPaperScrap from './images/lined-paper-scrap.png'
import RedPaper from './images/red-paper.png'
import RedGinghamScrap from './images/red-gingham-scrap.png'
import PortfolioDayInstallation from './images/portfolio-day-installation.jpg'
import ArchitecturalModel from './images/architectural-model.png'
import ArtFilmReel from './images/art-film-reel.png'
import RedBow from './images/red-bow.png'
import SilverStar from './images/silver-star.png'
import LaceTape from './images/lace-tape.png'

export function ExperiencePage1({ goToPage2 }) {
  return (
    <div className="experience-page-container">
      <button
        className=" glue-on experience-page-next-btn"
        onClick={goToPage2}
      >
        Next
      </button>

      <img src={GraphPaper} className='graph-paper-background glue-on' />
      <div className='experience-left-page-container glue-on'>
        <img src={PortfolioDayInstallation} className='portfolio-day-installation-img' />
        
        <div className='esa-title'>Etobicoke School of the Arts</div>
        <p className='patrick-hand-text'>
          At Etobicoke School of the Arts, I studied as a Contemporary Arts
          major in an environment that prioritized creativity, independence,
          and conceptual thinking. We were given a unique freedom to explore
          disciplines like drawing, painting, animation, and architecture,
          while also experimenting with new mediums such as sculpting with
          everyday objects.
          <br /><br />
          This open-ended environment pushed me to develop strong self-discipline
          and initiative, as we were often responsible for creating our own
          direction without strict guidelines or deadlines. In many ways, this
          freedom made the experience more demanding, but also far more
          rewarding as it taught me how to think critically and creatively without
          relying on external direction. Regular critiques, led primarily by
          students, helped me build confidence in presenting ideas, thinking
          critically, and giving constructive feedback.
        </p>
        <img src={ArchitecturalModel} className='architectural-model-img' />
        <p className='patrick-hand-text'>
          This program emphazised conceptual art, encouraging us to create, with
          intention. We used art as a way to explore ideas, communicate meaning,
          and address problems, rather than focusing solely on technical excecution.
          This mindset has had a lasting impact on how I approach challenges beyond
          art, shaping the way I think, create, and solve problems in general.
        </p>
      </div>

      <img src={RedBow} className='glue-on red-bow' />

      <img src={RedPaper} className='red-paper-background glue-on' />
      <div className='experience-right-page-container glue-on'>
        <img src={LinedPaperScrap} className='lined-paper-scrap glue-on' />
        <img src={RedGinghamScrap} className='red-gingham-scrap glue-on' />
        <img src={LinedPaper} className='experience-lined-paper-background glue-on' />
        <img src={ArtFilmReel} className='art-film-reel glue-on' />
        <img src={SilverStar} className='silver-star-sticker glue-on' />
        <img src={LaceTape} className='lace-tape glue-on' />


        <p className='patrick-hand-text glue-on' id='animation-description'>
          I took animation courses at ESA where I worked on projects such
          as a collaborative claymation film and flipbooks, as well as learned
          tools like Adobe Animate. Here, I gained my first exposure to coding
          by working with HTML, an experience that later influenced my interest
          in technology.
        </p>

        <div className='pd-title-container glue-on'>
          <span className='pd-title pd-title-rotation-1'>Portfolio</span>
          <span className='pd-title pd-title-rotation-2'>Day</span>
        </div>

        <div className='pd-description-container glue-on'>
          <p className='esa-text' id='pd-description'>
            Portfolio Day is an annual exhibition for senior Contemporary Arts
            students, where we transform the entire school into a gallery, filling
            hallways, classrooms, locker rooms and even the cafeteria for our work.
            The event brings together hundreds of university representatives across
            North America, Europe and Asia, along with over a thousand public
            visitors in the evening.
            <br /><br />
            For me, this experience was a major turning point in building confidence.
            Presenting my work to professionals and engaging in conversations about
            my ideas helped me to become far more comfortable with public speaking
            and connecting with new people.
            <br /><br />
            My portfolio took the form of an installation in the school cafeteria. It
            was a walk-in structure made of frosted plexiglass and wooden panels. It
            featured sculptural elements built from carboard tubes in place of one of
            the walls, and doubled as shelving for architectural models, alongside
            projections of my animations and a collection of my sketchbooks and drawings.
            The piece brought together multiple mediums to reflect both my creative process
            and interests.
          </p>
        </div>
      </div>
    </div>
  );
}