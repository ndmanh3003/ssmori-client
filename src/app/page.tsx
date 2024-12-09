import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons'

const nav = [
  { label: 'Menu', href: '/menu' },
  { label: 'Track order', href: '/track-order' },
  { label: 'Contact us', href: '/contact-us' },
  { label: 'About us', href: '/about-us' }
]

export default function Home() {
  return (
    <div>
      <header className='mt-3 flex justify-between items-center'>
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
      <section className='h-[80vh] max-h-[660px] w-full flex items-center justify-between mt-20'>
        <div>
          <div className='font-impact text-mr-rd text-5xl font-semibold'>Japan first choice</div>
          <div className='font-header text-black text-[70px] font-medium'>
            Sushi Mori That
            <br />
            You <span className='text-mr-nd'>Will Love</span>
          </div>
          <p className='my-5'>The sushi at Sushi Mori is made from ingredients sourced directly from the seas of Japan, then transported to Vietnam by air.</p>
          <Button className='!text-lg !rounded-full !mt-5 !py-6 !px-12' icon={<ArrowRightOutlined />} iconPosition='end' type='primary'>
            View Menu
          </Button>
        </div>
        <Image alt='sushi' className='rotate-90 w-[40vw] h-auto' height={1000} src='/hp-sushi.png' width={1000} />
      </section>
    </div>
  )
}
