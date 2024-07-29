// import React, { useEffect, useState } from 'react';
import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { VideoPageContainer, VideoPageMain, VideoPageTitle } from '../styled/containers';



export default function Live() {
  // const [videoUrl, setVideoUrl] = useState('');

  // useEffect(() => {
  //   async function fetchVideoUrl() {
  //     const response = await fetch('/api/video');
  //     const data = await response.json();
  //     setVideoUrl(data.url);
  //   }

  //   //fetchVideoUrl();
  // }, []);

  return (
    <VideoPageContainer>
      <VideoPageMain>
        <VideoPageTitle>Live Stream</VideoPageTitle>
        {/* {videoUrl && <VideoPlayer src={videoUrl} />} */}
        <VideoPlayer src='https://cdn.builder.io/o/assets%2Fe7fb3d1e4da14573bd2a1edb7bfee5f1%2F6260dcf41aab4e6cbe22df5141cc0d96%2Fcompressed?apiKey=e7fb3d1e4da14573bd2a1edb7bfee5f1&token=6260dcf41aab4e6cbe22df5141cc0d96&alt=media&optimized=true' />
      </VideoPageMain>
    </VideoPageContainer>
  );
}