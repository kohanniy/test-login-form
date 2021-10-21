import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import './Form.scss';

interface IFormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode | ReactNode[];
}

function Form(props: IFormProps) {
  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <form {...rest} noValidate className={cn('form', className)} >
      {children}
    </form>
  )
}

export default Form;
