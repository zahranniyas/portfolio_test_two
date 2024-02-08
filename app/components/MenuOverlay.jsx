import Link from 'next/link';
import './menuoverlay.css';

const MenuOverlay = () => {
  return (
    <ul className='mobmenu'>
        <li><Link href={""} className='mobmenu-item'>About</Link></li>
        <li><Link href={""} className='mobmenu-item'>Projects</Link></li>
        <li><Link href={""} className='mobmenu-item'>Contact</Link></li>
    </ul>
  )
}

export default MenuOverlay