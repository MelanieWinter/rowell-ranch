import { Link } from 'react-router-dom'
import './NavLink.css'

export default function NavLink({ to, content, onClick }) {
    return (
        <Link to="{to}" className='NavLink' onClick={onClick}>
            {content}
        </Link>
    )
}