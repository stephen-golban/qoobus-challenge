import React from 'react'
import { FormItemProps, Input, Form } from 'antd'
import { IconType } from 'rc-tree/lib/interface'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

interface IProps extends FormItemProps {
  is_password_field?: boolean
  field_icon: IconType
}

const Field: React.FC<IProps> = ({ field_icon, is_password_field, ...props }: IProps) => {
  if (is_password_field)
    return (
      <Form.Item {...props} style={{ width: '100%' }}>
        <Input.Password
          type="password"
          prefix={field_icon}
          placeholder={props.label as string}
          iconRender={(visible) =>
            visible ? <EyeIcon width={15} height={15} /> : <EyeOffIcon width={15} height={15} />
          }
        />
      </Form.Item>
    )

  return (
    <Form.Item {...props} style={{ width: '100%' }}>
      <Input type="text" prefix={field_icon} placeholder={props.label as string} />
    </Form.Item>
  )
}

export default Field
