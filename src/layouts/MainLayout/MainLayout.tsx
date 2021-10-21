import { FunctionComponent } from 'react';
import './MainLayout.scss';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps ): JSX.Element => {
  return (
    <main className='main'>
      {children}
    </main>
  );
}; 

export const withMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent (props: T): JSX.Element {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};