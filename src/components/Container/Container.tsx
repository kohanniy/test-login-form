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

  const classes = cn(
    'container', 
    {
      'container__disableGutters': disableGutters === true,
    },
    className
  );

  switch (component) {
    case 'div':
      return (
        <div {...rest} className={classes}>
          {children}
        </div>
      );
    case 'section':
      return (
        <section {...rest} className={classes}>
          {children}
        </section>
      );
    case 'article':
      return (
        <article {...rest} className={classes}>
          {children}
        </article>
      );
    case 'aside':
      return (
        <aside {...rest} className={classes}>
          {children}
        </aside>
      );
    default: 
      return (<></>)
  };
}

export default Container;
