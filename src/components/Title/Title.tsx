import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './Title.scss';
import cn from 'classnames';

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: string | ReactNode;
  variant?: 'h1' | 'h2' | 'h3';
  component?: 'h1' | 'h2' | 'h3';
}

function Title(props: ITitleProps) {
  const {
    children,
    variant = 'h1',
    className,
    component = 'h1',
    ...rest
  } = props;

  const classes = cn(
    'title', 
    {
      'title_h1': variant === 'h1',
      'title_h2': variant === 'h2',
      'title_h3': variant === 'h3',
    },
    className
  );

  switch (component) {
    case 'h1':
      return (
        <h1 className={classes} {...rest} >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={classes} {...rest}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={classes} {...rest}>
          {children}
        </h3>
      )
    default:
      throw new Error(`${component} недопустимый тег для заголовка`)
  }
}

export default Title;
