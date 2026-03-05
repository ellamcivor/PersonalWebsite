import './Folder.css';
import GreenFolder from './images/green-folder.png';
import YellowFolder from './images/yellow-folder.png';
import PinkFolder from './images/pink-folder.png';
import BlueFolder from './images/blue-folder.png';
import DarkPurpleFolder from './images/dark-purple-folder.png';
import LightPurpleFolder from './images/light-purple-folder.png';

export function Folder({ color, name, selected, onClick }) {

  const folderColors = {
    green: GreenFolder,
    yellow: YellowFolder,
    pink: PinkFolder,
    blue: BlueFolder,
    lightPurple: LightPurpleFolder,
    darkPurple: DarkPurpleFolder
  };

  console.log(folderColors[color]);

  return (
    <div className='folder-container' onClick={onClick} >
      <img src={`${folderColors[color]}`} className='folder' />
      <div className={`folder-text ${selected ? "selected" : ""}`}>
        {name}
      </div>
    </div>
  );
}