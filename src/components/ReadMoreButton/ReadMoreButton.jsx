import './ReadMoreButton.css'

export default function ReadMoreButton({ href, style, content }) {
    return (
        <a href={href} className={style}>
            {content}
        </a>
    )
}