// components/StyledLink.js
import Link from 'next/link';
import styled from 'styled-components';

const StyledAnchor = styled.span`
  color: white;
  text-decoration: none;
`;

const StyledLink = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledAnchor>{children}</StyledAnchor>
  </Link>
);

export default StyledLink;
