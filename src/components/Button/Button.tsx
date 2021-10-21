import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import './Button.scss';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
}
export function Button(props: IButtonProps) {
  const { disabled = false, className, ...rest } = props;

  return (
    <button 
      className={cn(
        'button', 
        {
          'button__disabled': disabled === true
        }, 
        className
      )}
      disabled={disabled} 
      {...rest} 
    />
  );
}
