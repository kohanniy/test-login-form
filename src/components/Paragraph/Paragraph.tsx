import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import './Paragraph.scss';

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
}

function Typography(props: IParagraphProps) {
  const {
    children,
    className,
    color = 'primary',
    ...rest
  } = props;


  return (
    <p 
      {...rest}
      className={cn(
        'paragraph',
        {
          'paragraph_error': color === 'danger',
          'paragraph_primary': color === 'primary',
          'paragraph_secondary': color === 'secondary',
        },
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Typography;
