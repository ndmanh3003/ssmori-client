import { Select, SelectProps } from 'antd'

export interface IOption {
  value: string
  label: string
}

interface ISelectC extends SelectProps {
  options: IOption[]
}

export default function SelectC(props: ISelectC) {
  const { options, ...rest } = props

  return (
    <Select
      dropdownAlign={{ offset: [0, 10] }}
      dropdownStyle={{
        backgroundColor: '#FFF7EB'
      }}
      {...rest}
    >
      {options.map((item, index) => (
        <Select.Option key={index + item.value} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  )
}