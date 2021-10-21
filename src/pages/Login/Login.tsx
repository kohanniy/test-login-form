import { FormEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import InputGroup from '../../components/InputGroup/InputGroup';
import Title from '../../components/Title/Title';
import useValidationForm from '../../hooks/useValidationForm';
import { withMainLayout } from '../../layouts/MainLayout/MainLayout';
import './Login.scss';

interface Props {}

function Login(props: Props) {
  const {} = props;
  const history = useHistory();

  const {
    values,
    handleChange,
    isValid,
    errors,
  } = useValidationForm();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    history.push('/profile');
  }

  return (
    <Container 
      disableGutters 
      component='section'
      className='login-section'
    >
      <Title className='login-section__title'>Вход</Title>
      <Form className='login-section__form' onSubmit={handleSubmit}>
        <InputGroup 
          info='Введите логин: developer21'
          label='Логин'
          errors={errors}
          inputName='username'
          values={values}
          inputProps={{
            onChange: handleChange,
            pattern: 'developer21',
            required: true,
          }}
        />
        <InputGroup 
          info='Введите пароль: 123456'
          label='Пароль'
          errors={errors}
          inputName='password'
          values={values}
          inputProps={{
            onChange: handleChange,
            type: 'password',
            pattern: '123456',
            required: true,
          }}
        />
        <button type='submit' disabled={!isValid}>Войти</button>
      </Form>
    </Container>
  )
}

export default withMainLayout(Login); 
