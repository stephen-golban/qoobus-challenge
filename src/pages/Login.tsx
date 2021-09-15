import React from 'react'
import { message } from 'antd'
import { compare } from 'bcryptjs'
import { LoginForm, User } from '../typings'
import { Field, Form } from '../components/ui'
import { Link, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/solid'
import { setCurrentUserSlice, setLoggedInSlice } from '../store/features'

const Login: React.FC = () => {
  const router = useHistory()
  const dispatch = useAppDispatch()
  const database = useAppSelector((state) => state.database.users)

  const onFormSubmit = async (values: LoginForm) => {
    const { password, email_address } = values
    const user: User | undefined = database.find((user) => user.email_address === email_address)

    if (!user) return message.error('There is no account registered with this e-mail address.')

    const matchingPwd = await compare(password, user.password)

    if (!matchingPwd) return message.error('Incorrect password, please try again.')
    else {
      message.success('You have been successfully logged in!')
      dispatch(setLoggedInSlice(true))
      dispatch(setCurrentUserSlice(user))
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }
  }
  return (
    <Form
      layout="vertical"
      form_title="Login"
      submit_button_text="Login"
      onFinish={(values: LoginForm) => onFormSubmit(values)}
      extra_links={
        <>
          New here? - <Link to="/auth/register">Register</Link>
        </>
      }
    >
      <Field
        name="email_address"
        label="Email address"
        field_icon={<AtSymbolIcon width={18} height={18} />}
        rules={[
          {
            required: true,
            message: 'This field is required, please complete it.',
          },
          {
            type: 'email',
            message: 'Please enter your email address in format: yourname@example.com',
          },
          {
            max: 40,
            message: 'This field should not be longer than 40 characters.',
          },
        ]}
      />
      <Field
        name="password"
        label="Password"
        is_password_field
        field_icon={<LockClosedIcon width={18} height={18} />}
        rules={[
          {
            required: true,
            message: 'This field is required, please complete it.',
          },
          {
            min: 4,
            message: 'This field must be at least 4 characters long.',
          },
          {
            max: 40,
            message: 'This field should not be longer than 40 characters.',
          },
        ]}
      />
    </Form>
  )
}

export default Login
