import './VideoPlayer.css'

export default function VideoPlayer() {
    return (
        <div className='VideoPlayer'>
            <iframe src="https://www.youtube.com/embed/tSuwHjru1fg" title="Road to 100" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='iframe'/>
        </div>
    )
}