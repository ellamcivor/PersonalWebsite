import './Tab.css';
import { Link, useLocation } from 'react-router';

export function Tab({ title, side, color, link }) {   
  const location = useLocation();
  const selected = location.pathname === link ? 'selected' : 'unselected'

  return (
    <Link className={`tab-container tab-container-${selected}-${side} ${side}-rotation ${color}-tab`} to={link}>
      <div className={`tab-text-${side} tab-text-${selected}-${side}`}>{title}</div>
    </Link>
  );
}