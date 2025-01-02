'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { App, Table, TableProps } from 'antd'

import Status from '../order/Status'

import price from '@/utils/price'
import cn from '@/utils/cn'
import { IOrderRes, orderApi, TypeOrder } from '@/service/api/order'
import getTime from '@/utils/time'

const time = [
  { label: 'Last 3 months', value: 3 },
  { label: 'Last 6 months', value: 6 },
  { label: 'Last 12 months', value: 12 }
]

export default function InvoiceTable() {
  const [curTime, setCurTime] = React.useState<3 | 6 | 12>(3)
  const { message } = App.useApp()
  const router = useRouter()
  const [invoices, setInvoices] = React.useState<IOrderRes[]>([])

  useEffect(() => {
    orderApi.getHistory({ from: '2021-01-01', page: 1, limit: 10 }).then((res) => {
      setInvoices(res.data)
    })
  }, [])

  const filterDropdown = () => (
    <div className='p-2 flex flex-col space-y-1'>
      {time.map(({ label, value }) => (
        <button
          key={value}
          className={cn('!px-2 !py-1 !rounded-lg  !text-black !hover:!bg-mr-nd', {
            '!bg-mr-rd !text-white': curTime === value
          })}
          onClick={() => setCurTime(value as 3 | 6 | 12)}
        >
          {label}
        </button>
      ))}
    </div>
  )

  const columns: TableProps<IOrderRes>['columns'] = [
    {
      title: 'ID',
      align: 'center',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Branch',
      dataIndex: 'branchInfo',
      key: 'branch'
    },
    {
      title: 'Order At',
      dataIndex: 'orderAt',
      align: 'center',
      key: 'orderAt',
      filterDropdown,
      render: (orderAt: string) => getTime(orderAt)
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
        return <Status status={status as IOrderRes['status']} />
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
    <Table<IOrderRes>
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
        onClick: () => {
          if (record.totalPayment) {
            router.push(`/order-detail/${record.id}`)
          } else {
            message.info('This order has no detail')
          }
        }
      })}
    />
  )
}
