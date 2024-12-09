import { Button } from 'antd'
import Image from 'next/image'
import { ShoppingOutlined } from '@ant-design/icons'

export interface IMenuItem {
  name: string
  description: string
  price: number
  image: string
}

export default function MenuItem(props: IMenuItem) {
  return (
    <div className='bg-white w-full rounded-2xl overflow-hidden shadow-menu cursor-pointer group flex flex-col justify-between'>
      <div>
        <Image alt='menu' className='w-full aspect-video' height={500} src={'https://drive.google.com/uc?export=view&id=' + props.image} width={500} />
        <div className='px-7 pt-3'>
          <h1 className='font-header mb-2 text-2xl font-semibold'>{props.name}</h1>
          <p className='text-base'>{props.description}</p>
        </div>
      </div>
      <div className='px-7 pb-5 mt-5'>
        <div className='rounded-xl w-full p-1 flex justify-between items-center border border-mr-th pl-3'>
          <span className='text-xl font-bold'>VNĐ {props.price}</span>
          <Button className='!rounded-xl !p-7 !bg-mr-th !text-black group-hover:!text-mr-nd !mb-[2px] !mr-[2px]' type='primary'>
            <ShoppingOutlined className='!font-bold !text-2xl' />
          </Button>
        </div>
      </div>
    </div>
  )
}
