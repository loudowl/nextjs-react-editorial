import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchLoremIpsum, fetchCatPhotos } from '../utils/fetchData';

const Container = styled.div`
  padding: 2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
`;

const MixedContent = () => {
  const [content, setContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    async function fetchData() {
      const loremIpsum = await fetchLoremIpsum();
      const catPhotos = await fetchCatPhotos();

      const mixedContent: JSX.Element[] = [];
      let paragraphCount = 0;

      loremIpsum.forEach((item: any, index: number) => {
        mixedContent.push(<Paragraph key={`para-${index}`}>{item.body}</Paragraph>);
        paragraphCount++;

        if (paragraphCount === 3) {
          mixedContent.push(<Headline key={`headline-${index}`}>Random Headline</Headline>);
        }

        if (paragraphCount === 5) {
          const catPhoto = catPhotos.shift();
          if (catPhoto) {
            mixedContent.push(<Image key={`cat-${index}`} src={catPhoto.url} alt="Cat" />);
          }
          paragraphCount = 0;
        }
      });

      setContent(mixedContent);
    }

    fetchData();
  }, []);

  return <Container>{content}</Container>;
};

export default MixedContent;