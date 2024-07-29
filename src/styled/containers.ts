import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const HeaderContainer = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
`;


export const VideoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const VideoPageContainer = styled.div`
  padding: 0 2rem;
`;

export const VideoPageMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoPageTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;


export const CatPagePhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CatPagePhotoItem = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
