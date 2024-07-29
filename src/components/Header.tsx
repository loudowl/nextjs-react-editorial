import React from 'react';
import { Nav } from '../styled/navigation';
import { StyledLink } from './StyledLink';
import { HeaderContainer } from '../styled/containers';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StyledLink href="/news">News</StyledLink>
        <StyledLink href="/sports">Sports</StyledLink>
        <StyledLink href="/weather">Weather</StyledLink>
        <StyledLink href="/local">Local</StyledLink>
        <StyledLink href="/live">Live</StyledLink>
        <StyledLink href="/cats">Cats</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
