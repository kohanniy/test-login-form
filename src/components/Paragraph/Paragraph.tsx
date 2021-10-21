import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import './Paragraph.scss';

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  error?: boolean;
}

function Typography(props: IParagraphProps) {
  const {
    children,
    className,
    error,
    ...rest
  } = props;


  return (
    <p 
      {...rest}
      className={cn(
        'paragraph',
        className,
        {
          'paragraph__error': error === true,
        }
      )}
    >
      {children}
    </p>
  )
}

export default Typography;
