import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './Title.scss';
import cn from 'classnames';

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: string | ReactNode;
  variant?: 'h1' | 'h2' | 'h3';
}

function Title(props: ITitleProps) {
  const {
    children,
    variant = 'h1',
    className,
    ...rest
  } = props;

  switch (variant) {
    case 'h1':
      return (
        <h1 
          {...rest}
          className={cn('title', className)}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 
          {...rest} 
          className={cn('title', className)}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 
          {...rest} 
          className={cn('title', className)}
        >
          {children}
        </h3>
      )
    default:
      throw new Error(`${variant} недопустимый тег для заголовка`)
  }
}

export default Title;
