import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLayout,
  HeaderLayout,
  NavLayout,
  Link,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';
const Layout = () => {
  return (
    <StyledLayout>
      <HeaderLayout>
        <NavLayout>
          <Link to="/"> Home </Link>
          <Link to="/movies"> Movies </Link>
        </NavLayout>
      </HeaderLayout>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </StyledLayout>
  );
};
export default Layout;