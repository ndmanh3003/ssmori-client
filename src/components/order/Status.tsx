import { Tag } from 'antd'

import { IOrder } from '..'

type IStatus = Pick<IOrder, 'status'>

enum StatusEnum {
  draft = 'cyan',
  submitted = 'blue',
  canceled = 'red',
  issued = 'green',
  paid = 'magenta'
}

export default function Status({ status }: IStatus) {
  return (
    <Tag bordered={false} className='!font-medium !mx-2' color={StatusEnum[status]}>
      {status}
    </Tag>
  )
}
