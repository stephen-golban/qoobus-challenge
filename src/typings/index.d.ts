import React from 'react'

export interface User {
  password: string
  last_name: string
  first_name: string
  email_address: string
}

export interface RegisterForm extends User {
  confirm_password: string
}

export type RouteType = {
  path: string
  name: string
  component: React.FC<{}>
  layout: string
}

export interface LoginForm {
  email_address: string
  password: string
}
