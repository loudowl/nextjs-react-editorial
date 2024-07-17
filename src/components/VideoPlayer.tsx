import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 2rem;
`;

const StyledVideo = styled.video`
  width: 100%;
`;

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <VideoContainer>
      <StyledVideo controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoContainer>
  );
};

export default VideoPlayer;