import { Input, InputProps } from 'antd'

import { cn } from '@/utils/cn'

export default function InputC(props: InputProps) {
  const { className, ...rest } = props

  return <Input {...rest} className={cn('!bg-transparent !p-2 !px-3 !text-lg !rounded-xl', className)} />
}
