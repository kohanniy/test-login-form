import Container from '../Container/Container';
import Paragraph from '../Paragraph/Paragraph';
import cn from 'classnames';
import './InputGroup.scss';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IInputGroupProps {
  label: string;
  info: string;
  inputName: string;
  errors: {[n: string]: string};
  values: {[n: string]: string};
  inputProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

function InputGroup(props: IInputGroupProps) {
  const {
    label,
    info,
    errors,
    inputName,
    inputProps,
    values
  } = props;

  return (
    <Container disableGutters className='input'>
      <label className='input__label' htmlFor={inputName}>{label}</label>
      <input
        id={inputName}
        name={inputName}
        value={values[inputName] || ''}
        className={cn(
          'input__field',
          {
            'input__field_error': Boolean(errors[inputName])
          }
        )} 
        {...inputProps}
      />
      <Paragraph color={Boolean(errors[inputName]) ? 'danger' : 'primary'}>
        {
          Boolean(errors[inputName])
            ? errors[inputName]
            : info
        }
      </Paragraph>
    </Container>
  )
}

export default InputGroup;
