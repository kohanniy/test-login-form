import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './Container.scss';
import cn from 'classnames';

interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLDivElement> {
  children: ReactNode;
  component?: 'div' | 'section' | 'article' | 'aside';
  disableGutters?: boolean;
}

function Container(props: ISectionProps) {
  const {
    children,
    className,
    component = 'div',
    disableGutters = false,
    ...rest
  } = props;

  switch (component) {
    case 'div':
      return (
        <div
          {...rest}
          className={
            cn('container', className, {
              'container__disableGutters': disableGutters === true,
            })
          }
        >
          {children}
        </div>
      );
    case 'section':
      return (
        <section
          {...rest}
          className={
            cn('container', className, {
              'container__disableGutters': disableGutters === true,
            })
          }
        >
          {children}
        </section>
      );
    case 'article':
      return (
        <article
          {...rest}
          className={
            cn('container', className, {
              'container__disableGutters': disableGutters === true,
            })
          }
        >
          {children}
        </article>
      );
    case 'aside':
      return (
        <aside
          {...props}
          className={
            cn('container', className, {
              'container__disableGutters': disableGutters,
            })
          }
        >
          {children}
        </aside>
      );
    default: 
      return (<></>)
  };
}

export default Container;
