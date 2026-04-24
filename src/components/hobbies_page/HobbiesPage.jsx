import './HobbiesPage.css';
import GinghamPaper1 from './images/gingham-paper-1.png'
import GinghamPaper2 from './images/gingham-paper-2.png'
import StarPaper from './images/star-paper.png'
import PinkScrapPaper from './images/pink-scrap-paper.png'
import PinkStripedPaper from './images/pink-striped-paper.png'
import Guitar from './images/guitar.png'
import Laptop from './images/laptop.png'
import MusicalStars from './images/musical-stars.png'
import PaddleBoard from './images/paddle-board.png'
import PageTitle from './images/page-title.png'
import PaintPalette from './images/paint-palette.png'
import Painting from './images/painting.png'
import Piano from './images/piano.png'
import PuzzlePolaroid from './images/puzzle-polaroid.png'
import Sudoku from './images/sudoku.jpg'
import Heart from './images/heart.png'
import Books from './images/books.png'
import Drawing from './images/drawing.png'
import FCP from './images/fcp.png'
import WatercolourPainting from './images/watercolour-painting.png'
import TitleBackground from './images/title-background.png'
import LeftBackground from './images/left-background.png'


export function HobbiesPage() {
  return (
    <div className="specific-page-container">
      {/* <img src={PageTitle} className="glue-on" id="hobbies-page-title" /> */}
      <div className="glue-on" id="title-opt-2">
        <img src={TitleBackground} id="title-background" />
        <span className="glue-on" id="title-2">my hobbies</span>
      </div>
      <img src={GinghamPaper1} className="glue-on" id="hobbies-gingham-paper-1" />
      <img src={StarPaper} className="glue-on" id="hobbies-star-paper" />
      <img src={PinkScrapPaper} className="glue-on" id="hobbies-pink-scrap-paper" />
      <img src={PuzzlePolaroid} className="glue-on" id="hobbies-sticker-puzzle-polaroid" />
      <img src={Sudoku} className="glue-on" id="hobbies-sticker-sudoku" />
      <img src={Guitar} className="glue-on" id="hobbies-sticker-guitar" />
      <img src={Painting} className="glue-on" id="hobbies-sticker-painting" />
      <img src={Laptop} className="glue-on" id="hobbies-sticker-laptop" />
      <img src={PaintPalette} className="glue-on" id="hobbies-sticker-paint-palette" />
      <img src={MusicalStars} className="glue-on" id="hobbies-sticker-musical-stars" />
      <img src={Piano} className="glue-on" id="hobbies-sticker-piano" />
      <img src={PaddleBoard} className="glue-on" id="hobbies-sticker-paddle-board" />
      <img src={Heart} className="glue-on" id="hobbies-sticker-crochet-heart" />
      <img src={Books} className="glue-on" id="hobbies-sticker-books" />
      <img src={Drawing} className="glue-on" id="hobbies-sticker-drawing" />
      <img src={FCP} className="glue-on" id="hobbies-sticker-fcp" />
      <img src={WatercolourPainting} className="glue-on" id="hobbies-sticker-watercolour-painting" />
      <img src={GinghamPaper2} className="glue-on" id="hobbies-gingham-paper-2" />
      <img src={PinkStripedPaper} className="glue-on" id="hobbies-pink-striped-paper" />
      <img src={LeftBackground} className="glue-on" id="hobbies-left-background" />
    </div>
  );
}