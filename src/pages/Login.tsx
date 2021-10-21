import React from 'react'
import { withMainLayout } from '../layouts/MainLayout/MainLayout'

interface Props {}

function Login(props: Props) {
  const {} = props

  return (
    <section>
      <h1>Вход</h1>
      <form noValidate name='login'>
        <div>
          <label htmlFor='username'>Логин</label>
          <input id='username' />
          <p>Введите логин: developer21</p>
        </div>
        <div>
          <label htmlFor='password'>Пароль</label>
          <input id='password' />
          <p>Введите пароль: 123456</p>
        </div>
      </form>
    </section>
  )
}

export default withMainLayout(Login); 
