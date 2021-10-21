import { FormEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setUsername } from '../../slices/user/userSlice';
import Container from '../../components/Container/Container';
import InputGroup from '../../components/InputGroup/InputGroup';
import Title from '../../components/Title/Title';
import useValidationForm from '../../hooks/useValidationForm';
import { withMainLayout } from '../../layouts/MainLayout/MainLayout';
import './Login.scss';
import { Button } from '../../components/Button/Button';

function Login() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    values,
    handleChange,
    isValid,
    errors,
  } = useValidationForm();

  const inputsData = [
    {
      info: 'Введите логин: developer21',
      label: 'Логин',
      inputName: 'username',
      inputProps: {
        onChange: handleChange,
        pattern: 'developer21',
        required: true,
      }
    },
    {
      info: 'Введите пароль: 123456',
      label: 'Пароль',
      inputName: 'password',
      inputProps: {
        type: 'password',
        onChange: handleChange,
        pattern: '123456',
        required: true,
      }
    },
  ];

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const { username } = values;
    dispatch(setUsername(username))
    history.push('/profile');
  };

  return (
    <Container 
      disableGutters 
      component='section'
      className='login'
    >
      <Title variant='h2' className='login__title'>Вход</Title>
      <form noValidate className='login__form' onSubmit={handleSubmit}>
        {
          inputsData.map((input) => (
            <InputGroup
              key={input.inputName}
              info={input.info}
              label={input.label}
              errors={errors}
              inputName={input.inputName}
              values={values}
              inputProps={input.inputProps}
            />
          ))
        }
        <Button type='submit' disabled={!isValid}>Войти</Button>
      </form>
    </Container>
  )
}

export default withMainLayout(Login); 
