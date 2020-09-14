import React from 'react'

 const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>
            <h1>키워드를 입력하세요</h1>
            <br></br>
            <p style= {{fontSize:'25px'}}>
유튜브 Api
            </p>
        </div>
    }

    const videoSrc = 'http://www.youtube.com/embed/${video.id.videoId}';
    console.log(typeof video);
    return (
        <div>
            <div className="uo embed">
                <iframe src={videoSrc} allowFullScreen title="Video player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail