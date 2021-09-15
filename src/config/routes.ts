import { Homepage, Login, Register } from '../pages'

export const auth_routes = [
  { name: 'Login', component: Login, path: '/login', layout: '/auth' },
  { name: 'Register', component: Register, path: '/register', layout: '/auth' },
]

export const default_routes = [{ name: 'Homepage', component: Homepage, path: '', layout: '/' }]
