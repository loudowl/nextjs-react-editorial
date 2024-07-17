import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PhotoItem = styled.div`
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
interface Photo {
  id: string;
  url: string;
}

export default function Cats() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: { limit: 10 },
      });
      setPhotos(response.data);
    }
    fetchPhotos();
  }, []);

  return (
    <Container>
      <Title>Cat Photos</Title>
      <PhotoList>
        {photos.map((photo: Photo) => (
          <PhotoItem key={photo.id}>
            <img src={photo.url} alt="Cat" />
          </PhotoItem>
        ))}
      </PhotoList>
    </Container>
  );
}