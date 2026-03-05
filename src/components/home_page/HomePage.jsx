import './HomePage.css';
import HomePageTitle from './images/home-page-title.png';
import PersonalPhoto from './images/personal-image.PNG';
import BlueGinghamTape from './images/blue-gingham-tape.png';
import PinkTape from './images/pink-tape.png';
import Envelope from './images/envelope.png';
import Bubble from './images/bubble.png';
import PinkPaperScrap from './images/pink-paper-scrap.png';
import PinkFlower from './images/pink-flower-sticker.png';
import BackgroundPaper from './images/background-paper.jpg';

export function HomePage() {
  return (
    <>
      <img src={HomePageTitle} className='glue-on' id='home-page-title' />

      <div>
        <img src={PersonalPhoto} className='glue-on' id='personal-photo' />
        <img src={BlueGinghamTape} className='glue-on' id='blue-gingham-tape-1' />
        <img src={BlueGinghamTape} className='glue-on' id='blue-gingham-tape-2' />
        <img src={PinkTape} className='glue-on' id='pink-tape-1' />
        <img src={PinkTape} className='glue-on' id='pink-tape-2' />
      </div>

      <div className="background-container glue-on">
        <img src={BackgroundPaper} class="background-paper glue-on" />
      </div>

      <img src={Envelope} className="glue-on" id="envelope" />
      <img src={Bubble} className="glue-on" id="bubble" />
      <img src={PinkPaperScrap} className="glue-on" id="pink-paper-scrap" />
      <img src={PinkFlower} className="glue-on" id="pink-flower" />

      <p className="glue-on" id="envelope-text">Hi, <br/> I'm <br/> Ella!</p>

      <p className="glue-on" id="bubble-text">
        <div className='highlighted rotate-1'>I'm a software</div>
        <div className='highlighted'>engineer and computer science</div>
        <div className='highlighted rotate-2'>graduate based in Toronto.</div>
      </p>

      <p className='glue-on' id="about-me-paragraph">
        My path into tech wasn't linear. I started <br/> in contemporary art,
        which shaped my<br/> visual instincts and creativity. This now<br/> pairs 
        with my love for math, which I<br/> focused on in university.

        <br/><br/>

        I'm drawn to where logic meets creativity<br/> and I love meeting new 
        people, sharing<br/> ideas, and learning together.
      </p> 
    </>
  );
}