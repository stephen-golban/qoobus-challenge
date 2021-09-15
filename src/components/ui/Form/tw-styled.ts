import { Button, Form } from 'antd'
import tw from 'tailwind-styled-components'

export const TWForm = tw(Form)`
    flex
    flex-col
    w-[500px]
`
export const TWFormTitle = tw.div`
    mb-[20px]
    text-[24px]
    text-black
`
export const TWFormButton = tw(Button)`
    w-full
`
export const TWFormExtraLinks = tw.div`
    mt-3
    w-full
`
