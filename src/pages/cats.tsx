import { useFetchCatPhotos } from '../hooks/useFetchCatPhotos';
import {
  Container,
  CatPagePhotoList,
  CatPagePhotoItem,
} from '../styled/containers';
import { CatPageTitle } from '../styled/typography';
import Image from 'next/image';

interface Photo {
  id: string;
  url: string;
}

//https://nextjs.org/docs/app/api-reference/components/image
const ResponsiveCatImage = (props: any) => {
  return <Image
  {...props}
  width={500} height={500}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
};

export default function Cats() {
  const photos = useFetchCatPhotos();

  return (
    <Container>
      <CatPageTitle>Cat Photos</CatPageTitle>
      <CatPagePhotoList>
        {photos.map((photo: Photo) => (
          <CatPagePhotoItem key={photo.id}>
            <ResponsiveCatImage src={photo.url} alt="Cat" />
          </CatPagePhotoItem>
        ))}
      </CatPagePhotoList>
    </Container>
  );
}
