import React from 'react';
import { Container } from '../styled/containers';
import useMixedContent from '../hooks/useMixedContent';

const MixedContent = () => {
  const content = useMixedContent();

  return <Container>{content}</Container>;
};

export default MixedContent;
