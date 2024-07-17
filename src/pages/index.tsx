import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Nav = styled.nav`
  margin: 2rem 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

export default function Home() {
  return (
    <Container>
      <Main>
        <Title>Editorial Website</Title>
      </Main>
    </Container>
  );
}