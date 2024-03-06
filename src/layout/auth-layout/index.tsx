import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
  return <div>{children}</div>;
}

export default AuthLayout;
