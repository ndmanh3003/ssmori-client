import { Tag } from 'antd'

import { IOrder } from '..'

type IStatus = Pick<IOrder, 'status'>

enum StatusEnum {
  ordering = 'gold',
  completed = 'orange',
  submited = 'purple',
  cancel = 'red',
  'in-progress' = 'blue',
  ready = 'cyan',
  paid = 'green',
  waiting = 'lime'
}

export default function Status({ status }: IStatus) {
  return (
    <Tag className='!font-medium !mx-2' color={StatusEnum[status]}>
      {status}
    </Tag>
  )
}
