import { useState, useEffect } from 'react';
import { fetchLoremIpsum, fetchCatPhotos } from '../fetchers';
import { Paragraph, Headline } from '../styled/typography';
import { Image } from '../styled/media';

const useMixedContent = () => {
  const [content, setContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    async function fetchData() {
      const loremIpsum = await fetchLoremIpsum();
      const catPhotos = await fetchCatPhotos();

      const mixedContent: JSX.Element[] = [];
      let paragraphCount = 0;

      loremIpsum.forEach((item: any, index: number) => {
        mixedContent.push(
          <Paragraph key={`para-${index}`}>{item.body}</Paragraph>,
        );
        paragraphCount++;

        if (paragraphCount === 3) {
          mixedContent.push(
            <Headline key={`headline-${index}`}>Random Headline</Headline>,
          );
        }

        if (paragraphCount === 5) {
          const catPhoto = catPhotos.shift();
          if (catPhoto) {
            mixedContent.push(
              <Image key={`cat-${index}`} src={catPhoto.url} alt="Cat" />,
            );
          }
          paragraphCount = 0;
        }
      });

      setContent(mixedContent);
    }

    fetchData();
  }, []);

  return content;
};

export default useMixedContent;
