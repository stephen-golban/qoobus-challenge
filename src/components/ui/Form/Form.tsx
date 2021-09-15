import React from 'react'
import styles from './form.module.css'
import { FormProps, Form as AntForm, Button } from 'antd'

interface IProps extends FormProps {
  form_title: string
  submit_button_text: string
  extra_links?: JSX.Element
}

const Form: React.FC<IProps> = ({ children, form_title, extra_links, submit_button_text, ...props }: IProps) => {
  return (
    <AntForm {...props} className={styles.form}>
      <div className={styles.formTitle}>{form_title}</div>
      {children}
      <Button className={styles.button} htmlType="submit" type="primary">
        {submit_button_text}
      </Button>
      {extra_links && <div className={styles.extra}>{extra_links}</div>}
    </AntForm>
  )
}

export default Form
