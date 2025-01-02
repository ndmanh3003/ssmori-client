import { Tag } from 'antd'

import { IOrderDetailRes } from '@/service/api/order'

enum StatusEnum {
  submitted = 'blue',
  canceled = 'red',
  paid = 'magenta'
}

export default function Status({ status }: Pick<IOrderDetailRes, 'status'>) {
  return (
    <Tag bordered={false} className='!font-medium !mx-2' color={StatusEnum[status]}>
      {status}
    </Tag>
  )
}
