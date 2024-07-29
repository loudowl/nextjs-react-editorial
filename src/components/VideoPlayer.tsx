import React from 'react';
import { VideoContainer } from '../styled/containers';
import { StyledVideo } from '../styled/media';

interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <VideoContainer>
      <StyledVideo controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoContainer>
  );
};