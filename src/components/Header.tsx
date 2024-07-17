import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import StyledLink from '../components/StyledLink';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled.span`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration: none;
  }
  &:click {
    text-decoration: underline;
    text-decoration: none;
  }
`;

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