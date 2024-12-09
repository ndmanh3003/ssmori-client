import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons'

import Header from '@/components/Header'
import MenuItem, { IMenuItem } from '@/components/MenuItem'

const nav = [
  { label: 'Menu', href: '/menu' },
  { label: 'Track order', href: '/track-order' },
  { label: 'Contact us', href: '/contact-us' },
  { label: 'About us', href: '/about-us' }
]

const menu: IMenuItem[] = [
  {
    name: 'Ocean Tuna',
    description: 'Fresh and tender with a rich, savory flavor that melts in your mouth, 6 pcs.',
    price: 300000,
    image: '1KuVhTi60MggnmfFxbN8IAW9JXQAE7JcW'
  },
  {
    name: 'Salmon and Shrimp Tempura Rolls',
    description: 'Crispy tempura shrimp paired with creamy salmon and a delicate balance of flavors, 8 pcs.',
    price: 100000,
    image: '1w2Kbd0sFkWHDK6OdYBHCvVUpoJPIdYPO'
  },
  {
    name: 'Norwegian Salmon',
    description: 'Rich, buttery texture with a smooth and slightly sweet taste, 6 pcs.',
    price: 350000,
    image: '1n546PGzrnLDU1uKkiTPkqtAcetKpQq5M'
  }
]

export default function Home() {
  return (
    <div className='flex flex-col'>
      <header className='py-3 flex justify-between items-center fixed max-w-[1440px] w-full px-10 -translate-x-10 bg-mr-th z-50'>
        <Image alt='logo' height={200} src='/icon-text.svg' width={200} />
        <nav>
          {nav.map(({ href, label }) => (
            <Link key={href} className='mr-7 font-medium hover:text-mr-nd' href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Button className='!rounded-full !bg-transparent !font-medium !px-7' icon={<UserOutlined />}>
          Login
        </Button>
      </header>
      <section className='h-[90vh] max-h-[700px] w-full flex items-center justify-between mt-20'>
        <div>
          <Header isBig impact='Japan first choice'>
            Sushi Mori That
            <br />
            You <span className='text-mr-nd'>Will Love</span>
          </Header>
          <p className='my-5'>The sushi at Sushi Mori is made from ingredients sourced directly from the seas of Japan, then transported to Vietnam by air.</p>
          <Button className='!text-lg !rounded-full !mt-5 !py-6 !px-12' icon={<ArrowRightOutlined />} iconPosition='end' type='primary'>
            View Menu
          </Button>
        </div>
        <Image alt='sushi' className='rotate-90 w-[40vw] h-auto' height={1000} src='/hp-sushi.png' width={1000} />
      </section>
      <section className='flex flex-col items-center'>
        <Header>Popular Menu</Header>
        <div className='grid grid-cols-3 gap-5 w-full mt-10'>
          {menu.map((item) => (
            <MenuItem key={item.image} {...item} />
          ))}
        </div>
      </section>
      <section className='flex space-x-10 items-center mt-32'>
        <Image alt='sushi' className='w-2/5 h-auto mx-20' height={1000} src='/hp-lover.png' width={1000} />
        <div>
          <Header impact='Japan first choice'>Providing healthy food is our goal, but not just that.</Header>
          <ul className='mt-5 leading-loose'>
            <li>Fresh and delicious ingredients every time.</li>
            <li>Fast delivery, preserving taste and quality.</li>
            <li>Exclusive loyalty cards with amazing perks.</li>
          </ul>
        </div>
      </section>

      <div className='h-96 w-10' />
    </div>
  )
}
