import React from 'react'
import { TWForm, TWFormButton, TWFormExtraLinks, TWFormTitle } from './tw-styled'
import { FormProps } from 'antd'

interface IProps extends FormProps {
  form_title: string
  submit_button_text: string
  extra_links?: JSX.Element
}

const Form: React.FC<IProps> = ({ children, form_title, extra_links, submit_button_text, ...props }: IProps) => {
  return (
    <TWForm {...props}>
      <TWFormTitle>{form_title}</TWFormTitle>
      {children}
      <TWFormButton htmlType="submit" type="primary">
        {submit_button_text}
      </TWFormButton>
      {extra_links && <TWFormExtraLinks>{extra_links}</TWFormExtraLinks>}
    </TWForm>
  )
}

export default Form
