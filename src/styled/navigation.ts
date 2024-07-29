import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const LinkInner = styled.span`
  color: white;
  text-decoration: none;
`;
