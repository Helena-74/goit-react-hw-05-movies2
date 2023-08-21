import { StyledNavLink } from 'components/App.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
<>
    <header>
      <nav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="movies">Movies</StyledNavLink>
      </nav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
</>
  );
};

