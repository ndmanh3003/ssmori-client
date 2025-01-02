import { Input, InputProps } from 'antd'

import cn from '@/utils/cn'

export default function InputC(props: InputProps) {
  const { className, ...rest } = props

  return <Input {...rest} className={cn('!bg-transparent !rounded-xl', className)} />
}
