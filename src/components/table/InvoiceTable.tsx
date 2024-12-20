'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Table, TableProps } from 'antd'

import Status from '../order/Status'
import { IOrder, TypeOrder } from '..'

import { invoices } from '@/mock'
import price from '@/utils/price'
import { cn } from '@/utils/cn'

type IInvoiceTable = Pick<IOrder, 'id' | 'branch' | 'orderAt' | 'totalPayment' | 'status' | 'type'>

const time = [
  {
    label: 'Last 3 months',
    value: 3
  },
  {
    label: 'Last 6 months',
    value: 6
  },
  {
    label: 'Last 12 months',
    value: 12
  }
]

export default function InvoiceTable() {
  const [curTime, setCurTime] = React.useState<3 | 6 | 12>(3)
  const router = useRouter()

  const filterDropdown = () => (
    <div className='p-2 flex flex-col space-y-1'>
      {time.map(({ label, value }) => (
        <button key={value} className={cn('!px-2 !py-1 !rounded-lg  !text-black !hover:!bg-mr-nd', { '!bg-mr-rd !text-white': curTime === value })} onClick={() => setCurTime(value as 3 | 6 | 12)}>
          {label}
        </button>
      ))}
    </div>
  )

  const columns: TableProps<IInvoiceTable>['columns'] = [
    {
      title: 'ID',
      align: 'center',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch'
    },
    {
      title: 'Order At',
      dataIndex: 'orderAt',
      align: 'center',
      key: 'orderAt',
      filterDropdown
    },
    {
      title: 'Payment',
      align: 'center',
      dataIndex: 'totalPayment',
      key: 'totalPayment',
      render: (payment: number) => price(payment)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
      render: (status: string) => {
        return <Status status={status as Pick<IOrder, 'status'>['status']} />
      }
    },
    {
      title: 'Type',
      dataIndex: 'type',
      align: 'center',
      key: 'type',
      render: (type: keyof typeof TypeOrder) => TypeOrder[type]
    }
  ]

  return (
    <Table<IInvoiceTable>
      className='!text-xl'
      columns={columns}
      dataSource={invoices.map((invoice) => ({ ...invoice, key: invoice.id }))}
      onRow={(record) => ({
        onMouseEnter: () => {
          document.body.style.cursor = 'pointer'
        },
        onMouseLeave: () => {
          document.body.style.cursor = 'default'
        },
        onClick: () => router.push('/order-detail/' + record.id)
      })}
    />
  )
}
