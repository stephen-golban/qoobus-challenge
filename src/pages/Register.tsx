import React from 'react'
import { Col, message, Row } from 'antd'
import { hash } from 'bcryptjs'
import { Field, Form } from '../components/ui'
import { RegisterForm, User } from '../typings'
import { createUserSlice } from '../store/features'
import { Link, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AtSymbolIcon, LockClosedIcon, UserIcon } from '@heroicons/react/solid'

const Register: React.FC = () => {
  const router = useHistory()
  const dispatch = useAppDispatch()
  const database = useAppSelector((state) => state.database.users)

  const onFormSubmit = async (values: RegisterForm) => {
    const { password, confirm_password, ...rest } = values
    const user: User | undefined = database.find((user) => user.email_address === values.email_address)

    if (user) return message.error('There is already a user registered with this e-mail address.')

    const hashedPwd = await hash(password, 12)
    const saved = dispatch(
      createUserSlice({
        ...rest,
        password: hashedPwd,
      })
    )
    if (saved) {
      message.success('You have been successfully registered!')
      setTimeout(() => {
        router.push('/auth/login')
      }, 1500)
    }
  }

  return (
    <Form
      layout="vertical"
      form_title="Register"
      submit_button_text="Register"
      extra_links={
        <>
          One of us? - <Link to="/auth/login">Login</Link>
        </>
      }
      onFinish={(values: RegisterForm) => onFormSubmit(values)}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Field
            name="first_name"
            label="First name"
            field_icon={<UserIcon width={18} height={18} />}
            rules={[
              {
                required: true,
                message: 'This field is required, please complete it.',
              },
              {
                min: 2,
                message: 'This field must be at least 2 characters long.',
              },
              {
                max: 20,
                message: 'This field should not be longer than 20 characters.',
              },
              {
                pattern: /^[a-zA-Z ]*$/,
                message: 'This field must contain only letters and spaces.',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <Field
            name="last_name"
            label="Last name"
            field_icon={<UserIcon width={18} height={18} />}
            rules={[
              {
                required: true,
                message: 'This field is required, please complete it.',
              },
              {
                min: 2,
                message: 'This field must be at least 2 characters long.',
              },
              {
                max: 20,
                message: 'This field should not be longer than 20 characters.',
              },
              {
                pattern: /^[a-zA-Z ]*$/,
                message: 'This field must contain only letters and spaces.',
              },
            ]}
          />
        </Col>
      </Row>
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
      <Field
        name="confirm_password"
        label="Confirm password"
        is_password_field
        field_icon={<LockClosedIcon width={18} height={18} />}
        dependencies={['password']}
        rules={[
          ({ getFieldValue }: any) => ({
            validator(_: any, value: any) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
          }),
          { required: true, message: "This field is required, please complete it." }
        ]}
      />
    </Form>
  )
}

export default Register
