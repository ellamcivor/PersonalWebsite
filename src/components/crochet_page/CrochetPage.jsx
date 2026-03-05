import '../Page.css';
import './CrochetPage.css';
import BackgroundPaper from './images/background-paper.JPG';
import Title from './images/crochet-projects-title.png';
import Dumpling from './images/crochet-dumpling.png';
import Glove from './images/crochet-glove.png';
import LakePillow from './images/crochet-crane-lake-pillow.png';
import WastelandPillow from './images/crochet-wasteland-pillow.png';
import Heart from './images/crochet-heart.png';
import StarPillow from './images/crochet-star-pillow.png';
import Hat from './images/crochet-hat.png';
import Turtle from './images/crochet-turtle.png';
import Strawberry from './images/crochet-strawberry.png';

export function CrochetPage() {
  return (
    <div className="specific-page-container">
      <img src={BackgroundPaper} class="background-paper-1 glue-on" />
      <div class="divide glue-on"></div>
      <img src={Title} className="title glue-on" />

      <div className="crochet-item-container glue-on" id="heart-container">
        <img src={Heart} className="glue-on crochet-item" id="heart" />
      </div>
      <div className="crochet-item-container glue-on" id="hat-container">
        <img src={Hat} className="glue-on crochet-item" id="hat" />
      </div>
      <div className="crochet-item-container glue-on" id="glove-container">
        <img src={Glove} className="glue-on crochet-item" id="glove" />
      </div>
      <div className="crochet-item-container glue-on" id="wasteland-pillow-container">
        <img src={WastelandPillow} className="glue-on crochet-item" id="wasteland-pillow" />
      </div>
      <div className="crochet-item-container glue-on" id="strawberry-container">
        <img src={Strawberry} className="glue-on crochet-item" id="strawberry" />
      </div>
      <div className="crochet-item-container glue-on" id="turtle-container">
        <img src={Turtle} className="glue-on crochet-item" id="turtle" />
      </div>
      <div className="crochet-item-container glue-on" id="lake-pillow-container">
        <img src={LakePillow} class="glue-on crochet-item" id="lake-pillow" />
      </div>
      <div className="crochet-item-container glue-on" id="star-pillow-container">
        <img src={StarPillow} className="glue-on crochet-item" id="star-pillow" />
      </div>
      <div className="crochet-item-container glue-on" id="dumpling-container">
        <img src={Dumpling} className="glue-on crochet-item" id="dumpling" />
      </div>
    </div>
  );
}