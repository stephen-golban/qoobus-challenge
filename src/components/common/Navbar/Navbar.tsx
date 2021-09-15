import Logo from './logo.svg'
import styles from './navbar.module.css'
import { useHistory } from 'react-router-dom'
import { Button, Dropdown, message, Popconfirm, Menu } from 'antd'
import { LogoutIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { destroyDatabaseSlice, setLogoutSlice } from '../../../store/features'

const Navbar = () => {
  const router = useHistory()
  const dispatch = useAppDispatch()
  const current_user = useAppSelector((state) => state.auth.current_user)

  const confirm = () => {
    message.success('You have successfully deleted the local database.')
    dispatch(destroyDatabaseSlice(true))
    dispatch(setLogoutSlice(null))
    setTimeout(() => {
      router.push('/auth/login')
    }, 1000)
  }

  const logout = () => {
    dispatch(setLogoutSlice(null))
    message.success('You have been successfully logged out.')
    setTimeout(() => {
      router.push('/auth/login')
    }, 1000)
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<LogoutIcon width={30} height={30} />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  )
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <Popconfirm
        title="Are you sure you want to drop the database? By dropping it all user data will be deleted and you'll be logged out!"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button danger type="primary">
          Destroy current database
        </Button>
      </Popconfirm>
      <Dropdown overlay={menu}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {current_user?.first_name + ' ' + current_user?.last_name}
          <UserCircleIcon width={30} height={30} style={{ marginLeft: 10 }} />
        </div>
      </Dropdown>
    </nav>
  )
}

export default Navbar
