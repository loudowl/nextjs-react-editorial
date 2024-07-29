import React, { ReactNode } from 'react';
import Link from 'next/link';
import { LinkInner } from '../styled/navigation';


export const StyledLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} passHref>
    <LinkInner>{children}</LinkInner>
  </Link>
);
