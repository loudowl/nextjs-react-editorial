// import React, { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../components/VideoPlayer';

const Container = styled.div`
  padding: 0 2rem;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

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
    <Container>
      <Main>
        <Title>Live Stream</Title>
        {/* {videoUrl && <VideoPlayer src={videoUrl} />} */}
        <VideoPlayer src='https://cdn.builder.io/o/assets%2Fe7fb3d1e4da14573bd2a1edb7bfee5f1%2F6260dcf41aab4e6cbe22df5141cc0d96%2Fcompressed?apiKey=e7fb3d1e4da14573bd2a1edb7bfee5f1&token=6260dcf41aab4e6cbe22df5141cc0d96&alt=media&optimized=true' />
      </Main>
    </Container>
  );
}