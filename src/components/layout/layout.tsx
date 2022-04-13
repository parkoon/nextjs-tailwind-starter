import React from 'react';

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return <>{children}</>;
}

export default Layout;
