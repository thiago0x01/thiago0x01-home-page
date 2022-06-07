import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="px-[20px] sm:px-[90px] md:px-[180px] lg:px-[270px]">
      {children}
    </div>
  );
};

export default Layout;
