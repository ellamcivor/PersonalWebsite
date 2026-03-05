import './TabBar.css';
import { Tab } from './Tab';

export function TabBar({side, tabs}) {

  return (
    <div className={`tabs-container-${side}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          side={side}
          color={tab.color}
          fontColor="white"
          link={tab.link}
        />
      ))}
    </div>
  );
}