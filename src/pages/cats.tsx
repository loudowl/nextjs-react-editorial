import { useFetchCatPhotos } from '../hooks/useFetchCatPhotos';
import { Container, CatPagePhotoList, CatPagePhotoItem} from '../styled/containers';
import { CatPageTitle } from '../styled/typography';
import Image from 'next/image';

interface Photo {
  id: string;
  url: string;
}

export default function Cats() {
  const photos = useFetchCatPhotos();

  return (
    <Container>
      <CatPageTitle>Cat Photos</CatPageTitle>
      <CatPagePhotoList>
        {photos.map((photo: Photo) => (
          <CatPagePhotoItem key={photo.id}>
            <Image src={photo.url} alt="Cat" />
          </CatPagePhotoItem>
        ))}
      </CatPagePhotoList>
    </Container>
  );
}
